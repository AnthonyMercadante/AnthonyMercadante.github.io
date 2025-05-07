import { useEffect, useRef } from "react";

export default function WaterScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    /* ---------- size ---------- */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- state ---------- */
    const p = { slope: 0, offset: 0, t: 0 };
    const ease = 0.08;

    /* ---------- input ---------- */
    const applyInput = (gamma: number, beta: number) => {
      const h = canvas.height;
      const slopeRange = h * 0.25;
      const heightRange = h * 0.15;
      p.slope  += ((slopeRange  * gamma) - p.slope)  * ease;
      p.offset += ((-heightRange * beta ) - p.offset) * ease;
    };

    /* 1️⃣ pointer fallback (always) */
    window.addEventListener("mousemove", e => {
      applyInput((e.clientX / canvas.width) * 2 - 1,
                 (e.clientY / canvas.height) * 2 - 1);
    });

    /* 2️⃣ motion if available */
    const motionOK = () => {
      window.addEventListener("deviceorientation", e => {
        applyInput((e.gamma ?? 0) / 90, (e.beta ?? 0) / 90);
      }, true);
    };

    if (typeof DeviceOrientationEvent !== "undefined") {
      // iOS 13+ secure‑context permission dance
      if ("requestPermission" in DeviceOrientationEvent) {
        const ask = async () => {
          try {
            const res = await (DeviceOrientationEvent as any).requestPermission();
            if (res === "granted") motionOK();
          } catch {}
        };
        // one‑time overlay
        const div = document.createElement("div");
        div.className =
          "fixed inset-0 z-50 flex items-center justify-center bg-black/60 text-white";
        div.innerHTML =
          '<button class="px-6 py-3 bg-blue-600 rounded">Enable motion</button>';
        div.onclick = () => { ask(); div.remove(); };
        document.body.appendChild(div);
      } else {
        // Android / desktop
        motionOK();
      }
    }

    /* ---------- draw ---------- */
    const draw = () => {
      const { width: w, height: h } = canvas;
      p.t += 0.03;
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      const baseY = h * 0.7;
      const samples = 120;
      for (let i = 0; i < samples; i++) {
        const x = (i / (samples - 1)) * w;
        const y =
          baseY +
          p.offset +
          p.slope * (x - w / 2) +
          Math.sin(p.t + i * 0.3) * 4;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = "rgba(37,145,255,0.35)";
      ctx.fill();
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
    />
  );
}
