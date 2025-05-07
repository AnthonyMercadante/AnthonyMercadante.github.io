import { useRef, useEffect, useState } from "react";

export default function WaterScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [needUnlock, setNeedUnlock] = useState(false);

  /* ---------- state shared between draw + handlers ---------- */
  const dims = useRef({ w: 0, h: 0 });
  const physics = useRef({
    targetSlope: 0,
    currentSlope: 0,
    targetOffset: 0,
    currentOffset: 0,
    t: 0,
  });

  /* 🔸 1 — declare the tilt handler OUTSIDE useEffect 🔸 */
  const handleTilt = (e: DeviceOrientationEvent) => {
    const { w, h } = dims.current;
    const SLOPE_RANGE  = h * 0.25;
    const HEIGHT_RANGE = h * 0.15;

    const gamma = (e.gamma ?? 0) / 90; // −1…+1
    const beta  = (e.beta  ?? 0) / 90; // −1…+1

    physics.current.targetSlope  = SLOPE_RANGE  * gamma;
    physics.current.targetOffset = -HEIGHT_RANGE * beta;
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    dims.current.w = canvas.width  = window.innerWidth;
    dims.current.h = canvas.height = window.innerHeight;

    const BASE_Y = dims.current.h * 0.7;
    const EASE   = 0.08;

    /* ---------- draw loop ---------- */
    const draw = () => {
      const { w, h } = dims.current;
      const p = physics.current;

      ctx.clearRect(0, 0, w, h);

      p.currentSlope  += (p.targetSlope  - p.currentSlope)  * EASE;
      p.currentOffset += (p.targetOffset - p.currentOffset) * EASE;
      p.t += 0.03;

      const samples = 120;
      const dx = w / (samples - 1);

      ctx.beginPath();
      for (let i = 0; i < samples; i++) {
        const x = i * dx;
        const y =
          BASE_Y +
          p.currentOffset +
          p.currentSlope * (x - w / 2) +
          Math.sin(p.t + i * 0.3) * 4;

        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = "rgba(37,145,255,0.35)";
      ctx.fill();

      requestAnimationFrame(draw);
    };
    draw();

    /* ---------- desktop fallback ---------- */
    const handleMouse = (e: MouseEvent) => {
      const { w, h } = dims.current;
      const SLOPE_RANGE  = h * 0.25;
      const HEIGHT_RANGE = h * 0.15;

      const gamma = (e.clientX / w) * 2 - 1;
      const beta  = (e.clientY / h) * 2 - 1;

      physics.current.targetSlope  = SLOPE_RANGE  * gamma;
      physics.current.targetOffset = -HEIGHT_RANGE * beta;
    };

    const handleResize = () => {
      dims.current.w = canvas.width  = window.innerWidth;
      dims.current.h = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", handleResize);

    /* ---------- iOS‑style permission check ---------- */
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      "requestPermission" in DeviceOrientationEvent
    ) {
      setNeedUnlock(true); // show overlay
    } else {
      // Android / desktop HTTPS → no prompt needed
      window.addEventListener("deviceorientation", handleTilt, true);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleTilt, true);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ---------- unlock button (only rendered if needUnlock) ---------- */
  const requestMotion = async () => {
    // haptic feedback (optional)
    navigator.vibrate?.(20);

    try {
      const perm = await (DeviceOrientationEvent as any).requestPermission();
      if (perm === "granted") {
        window.addEventListener("deviceorientation", handleTilt, true);
        setNeedUnlock(false); // hide overlay
      }
    } catch {
      console.warn("DeviceOrientation permission denied.");
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none select-none"
      />

      {needUnlock && (
        <button
          onClick={requestMotion}            /* 👈 merged into ONE onClick */
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/60 text-white text-xl"
        >
          Enable motion control
        </button>
      )}
    </>
  );
}
