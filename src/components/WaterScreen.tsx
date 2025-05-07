import { useRef, useEffect } from "react";

const WaterScreen = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    /* === tiny height‑field ripple sim ==================== */
    const C = 120, R = 80, damp = 0.99;
    const z = Array.from({ length: R }, () => Array(C).fill(0));
    const zPrev = z.map(r => [...r]);

    const step = () => {
      for (let y = 1; y < R - 1; y++)
        for (let x = 1; x < C - 1; x++) {
          const nz =
            ((z[y - 1][x] + z[y + 1][x] + z[y][x - 1] + z[y][x + 1]) / 2 -
              zPrev[y][x]) *
            damp;
          zPrev[y][x] = z[y][x];
          z[y][x] = nz;
        }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#07f3"; // translucent blue
      ctx.beginPath();
      for (let y = 0; y < R - 1; y++) {
        for (let x = 0; x < C; x++) {
          const xpos = (x / (C - 1)) * w;
          const ypos = ((y + z[y][x]) / (R - 1)) * h;
          ctx.lineTo(xpos, ypos);
        }
      }
      ctx.fill();
    };

    const tick = () => {
      step();
      draw();
      requestAnimationFrame(tick);
    };
    tick();

    const splash = (x: number, y: number, mag = 8) => {
      const cx = Math.floor((x / w) * C);
      const cy = Math.floor((y / h) * R);
      if (z[cy]) z[cy][cx] = mag;
    };

    window.addEventListener("mousemove", e => splash(e.clientX, e.clientY, 6));
    window.addEventListener("deviceorientation", e => {
      const mag = (Math.abs(e.beta ?? 0) + Math.abs(e.gamma ?? 0)) / 90;
      splash(w / 2, h / 2, mag * 10);
    });
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    return () => {
      /* cleanup listeners on unmount */
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("deviceorientation", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
    />
  );
};

export default WaterScreen;
