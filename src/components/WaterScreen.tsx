import { useRef, useEffect } from "react";

export default function WaterScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    /* -------------------------------------------------- */
    /*   CONFIG                                           */
    /* -------------------------------------------------- */
    let w = (canvas.width  = window.innerWidth);   // 👈 use window.
    let h = (canvas.height = window.innerHeight);  // 👈 use window.
    const BASE_Y       = h * 0.7;
    const HEIGHT_RANGE = h * 0.15;
    const SLOPE_RANGE  = h * 0.25;
    const EASE         = 0.08;

    /* -------------------------------------------------- */
    /*   STATE                                            */
    /* -------------------------------------------------- */
    let targetSlope = 0, currentSlope = 0;
    let targetOffset = 0, currentOffset = 0;
    let t = 0;

    /* -------------------------------------------------- */
    /*   DRAW loop                                        */
    /* -------------------------------------------------- */
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      currentSlope  += (targetSlope  - currentSlope)  * EASE;
      currentOffset += (targetOffset - currentOffset) * EASE;
      t += 0.03;

      const samples = 120;
      const dx = w / (samples - 1);

      ctx.beginPath();
      for (let i = 0; i < samples; i++) {
        const x = i * dx;
        const y =
          BASE_Y +
          currentOffset +
          currentSlope * (x - w / 2) +
          Math.sin(t + i * 0.3) * 4;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = "rgba(37,145,255,0.35)";
      ctx.fill();
    };

    const loop = () => {
      draw();
      requestAnimationFrame(loop);
    };
    loop();

    /* -------------------------------------------------- */
    /*   EVENT HANDLERS                                   */
    /* -------------------------------------------------- */
    const handleTilt = (e: DeviceOrientationEvent) => {
      const gamma = (e.gamma ?? 0) / 90;
      const beta  = (e.beta  ?? 0) / 90;
      targetSlope  = SLOPE_RANGE  * gamma;
      targetOffset = -HEIGHT_RANGE * beta;
    };

    const handleMouse = (e: MouseEvent) => {
      const gamma = (e.clientX / w) * 2 - 1;
      const beta  = (e.clientY / h) * 2 - 1;
      targetSlope  = SLOPE_RANGE  * gamma;
      targetOffset = -HEIGHT_RANGE * beta;
    };

    const handleResize = () => {
      w = canvas.width  = window.innerWidth;   // 👈 use window.
      h = canvas.height = window.innerHeight;  // 👈 use window.
    };

    window.addEventListener("deviceorientation", handleTilt, true);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("deviceorientation", handleTilt, true);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
    />
  );
}
