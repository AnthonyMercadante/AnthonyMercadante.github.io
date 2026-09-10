import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';

type MotionPermissionEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<string>;
};

export default function WaterScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState(false);
  const [tiltError, setTiltError] = useState(false);
  const [supportsTilt] = useState(() => typeof DeviceOrientationEvent !== 'undefined');
  const enableTilt = async () => {
    try {
      const event = DeviceOrientationEvent as MotionPermissionEvent;
      const allowed = !event.requestPermission || (await event.requestPermission()) === 'granted';
      setTilt(allowed);
      setTiltError(!allowed);
    } catch {
      setTiltError(true);
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let frame = 0;
    let width = 0,
      height = 0;
    let phase = 0,
      slope = 0,
      level = 0;
    const target = { slope: 0, level: 0 };
    const running = !paused && !reduceMotion;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      slope += (target.slope - slope) * 0.05;
      level += (target.level - level) * 0.05;
      if (running) phase += 0.014;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const x = (width * i) / 100;
        const y =
          height * (0.65 + level) +
          slope * height * (i / 100 - 0.5) +
          Math.sin(phase + i * 0.08) * 5;
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = '#72b5b02b';
      ctx.fill();
      ctx.strokeStyle = '#9bd4d185';
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    };
    const loop = () => {
      draw();
      if (running && !document.hidden) frame = requestAnimationFrame(loop);
    };
    const visibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) loop();
    };
    const pointer = (event: PointerEvent) => {
      target.slope = (event.clientX / width - 0.5) * 0.32;
      target.level = (event.clientY / height - 0.5) * 0.12;
    };
    const orientation = (event: DeviceOrientationEvent) => {
      target.slope = Math.max(-0.5, Math.min(0.5, (event.gamma ?? 0) / 90));
      target.level = Math.max(-0.12, Math.min(0.12, (event.beta ?? 0) / 360));
    };
    resize();
    loop();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', visibility);
    if (running) window.addEventListener('pointermove', pointer, { passive: true });
    if (running && tilt) window.addEventListener('deviceorientation', orientation);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', pointer);
      window.removeEventListener('deviceorientation', orientation);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [paused, reduceMotion, tilt]);
  return (
    <div className="water-study">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="water-controls">
        <Link className="back-link" to="/">
          ← The surface
        </Link>
        <p className="eyebrow">An interactive study</p>
        <h1>Water.</h1>
        <p>A small experiment in motion and equilibrium.</p>
        <div>
          <button
            className="action-link"
            disabled={!!reduceMotion}
            onClick={() => setPaused(!paused)}
          >
            {reduceMotion ? 'Motion reduced' : paused ? 'Resume motion' : 'Pause motion'}
          </button>
          {supportsTilt && !tilt && !reduceMotion && (
            <button className="text-link" onClick={enableTilt}>
              Enable device tilt ↗
            </button>
          )}
        </div>
        {tiltError && (
          <p role="status">Device tilt wasn’t enabled. You can still move the pointer.</p>
        )}
      </div>
    </div>
  );
}
