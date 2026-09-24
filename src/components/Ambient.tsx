import { useEffect, useRef } from 'react';

type Rgb = [number, number, number];
type Ribbon = {
  rgb: Rgb;
  base: number;
  amp: number;
  f1: number;
  f2: number;
  s1: number;
  s2: number;
  ph: number;
  hgt: number;
  alpha: number;
};

/**
 * Northern lights in the site's own accents (sage, aqua, a trace of amber).
 * Kept dim on purpose: this sits behind long reading pages, so it has to stay
 * atmosphere rather than become the subject.
 */
const RIBBONS: Ribbon[] = [
  { rgb: [155, 212, 209], base: 0.3, amp: 0.075, f1: 2.1, f2: 5.3, s1: 0.11, s2: 0.07, ph: 0.3, hgt: 0.44, alpha: 0.3 },
  { rgb: [197, 223, 170], base: 0.44, amp: 0.09, f1: 1.5, f2: 4.2, s1: -0.08, s2: 0.12, ph: 2.1, hgt: 0.5, alpha: 0.26 },
  { rgb: [221, 188, 135], base: 0.62, amp: 0.06, f1: 2.7, f2: 3.4, s1: 0.065, s2: -0.09, ph: 4.2, hgt: 0.34, alpha: 0.1 },
];

const STAR_MAX = 300;
const LOW = 4; // ribbons render at quarter resolution, then upscale into a soft glow
const STILL_T = 40; // the moment the still sky is drawn at

/** A 2px-wide vertical gradient: faint body, bright lower hem, like a curtain. */
function ribbonSprite([r, g, b]: Rgb) {
  const c = document.createElement('canvas');
  c.width = 2;
  c.height = 256;
  const x = c.getContext('2d')!;
  const col = (a: number, m = 0) =>
    `rgba(${[r, g, b].map((v) => Math.round(v + (255 - v) * m)).join(',')},${a})`;
  const grad = x.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, col(0));
  grad.addColorStop(0.28, col(0.04));
  grad.addColorStop(0.6, col(0.2));
  grad.addColorStop(0.79, col(0.5, 0.08));
  grad.addColorStop(0.87, col(0.9, 0.38));
  grad.addColorStop(0.915, col(0.38));
  grad.addColorStop(1, col(0));
  x.fillStyle = grad;
  x.fillRect(0, 0, 2, 256);
  return c;
}

function starSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const x = c.getContext('2d')!;
  const g = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, 'rgba(240,239,232,1)');
  g.addColorStop(0.18, 'rgba(232,238,232,.85)');
  g.addColorStop(0.45, 'rgba(200,220,214,.16)');
  g.addColorStop(1, 'rgba(200,220,214,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 32, 32);
  return c;
}

/**
 * Site-wide night sky: stars under slow aurora ribbons. It only animates where
 * `live` is set (the landing page), where the ribbons also lean toward the
 * pointer. Everywhere else it draws one still frame and repaints only on
 * resize, so reading pages don't pay for a continuously repainting viewport.
 * Reduced motion always gets the still frame.
 */
export default function Ambient({ live = false }: { live?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sky = canvasRef.current;
    const sx = sky?.getContext('2d');
    if (!sky || !sx) return;

    const low = document.createElement('canvas');
    const lx = low.getContext('2d')!;
    const star = starSprite();
    const sprites = RIBBONS.map((r) => ribbonSprite(r.rgb));
    const stars = Array.from({ length: STAR_MAX }, () => {
      const big = Math.random() < 0.07;
      return {
        x: Math.random(),
        y: Math.pow(Math.random(), 1.35),
        r: big ? 1.1 + Math.random() * 0.9 : 0.45 + Math.random() * 0.6,
        a: big ? 0.7 + Math.random() * 0.25 : 0.2 + Math.random() * 0.45,
        sp: 0.4 + Math.random() * 1.6,
        ph: Math.random() * Math.PI * 2,
      };
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const ptr = { x: 0.5, y: 0.35, sx: 0.5, sy: 0.35, act: 0, tgt: 0 };
    let W = 0;
    let H = 0;
    let LW = 0;
    let LH = 0;
    let bg: CanvasGradient;
    let horizon: CanvasGradient;
    let raf = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      sky.width = Math.round(W * dpr);
      sky.height = Math.round(H * dpr);
      sx.setTransform(dpr, 0, 0, dpr, 0, 0);
      LW = low.width = Math.max(40, Math.ceil(W / LOW));
      LH = low.height = Math.max(40, Math.ceil(H / LOW));
      bg = sx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#070b0c');
      bg.addColorStop(0.55, '#0b1012');
      bg.addColorStop(1, '#0e1416');
      horizon = sx.createRadialGradient(W * 0.5, H * 1.15, 0, W * 0.5, H * 1.15, Math.max(W, H) * 0.8);
      horizon.addColorStop(0, 'rgba(155,212,209,.08)');
      horizon.addColorStop(0.5, 'rgba(197,223,170,.025)');
      horizon.addColorStop(1, 'rgba(11,16,18,0)');
    };

    const draw = (t: number, moving: boolean) => {
      lx.globalCompositeOperation = 'source-over';
      lx.globalAlpha = 1;
      lx.clearRect(0, 0, LW, LH);
      lx.globalCompositeOperation = 'lighter';
      const pyl = ptr.sy * LH;
      RIBBONS.forEach((R, k) => {
        const cx = 0.5 + 0.34 * Math.sin(t * 0.021 + R.ph);
        for (let x = 0; x < LW; x++) {
          const u = x / LW;
          let y =
            (R.base +
              R.amp * Math.sin(u * R.f1 * Math.PI + t * R.s1 + R.ph) +
              R.amp * 0.55 * Math.sin(u * R.f2 * Math.PI - t * R.s2 + R.ph * 1.7) +
              0.016 * Math.sin(u * 17 + t * 0.42 + R.ph)) *
            LH;
          const dx = (u - ptr.sx) / 0.17;
          const inf = Math.exp(-dx * dx) * ptr.act;
          y += (pyl - y) * 0.3 * inf;
          const h = R.hgt * LH * (0.85 + 0.25 * Math.sin(u * 3.3 + t * 0.13 + R.ph)) * (1 + 0.18 * inf);
          const ray = 0.5 + 0.5 * Math.sin(u * 41 + t * 0.8 + R.ph + 1.6 * Math.sin(u * 8.5 - t * 0.27));
          const d = (u - cx) / 0.55;
          const env = 0.28 + 0.72 * Math.exp(-d * d);
          lx.globalAlpha = Math.min(1, R.alpha * env * (0.42 + 0.58 * ray * ray) * (1 + 0.35 * inf));
          lx.drawImage(sprites[k], 0, 0, 2, 256, x, y - h * 0.87, 1, h);
        }
      });

      sx.globalCompositeOperation = 'source-over';
      sx.globalAlpha = 1;
      sx.fillStyle = bg;
      sx.fillRect(0, 0, W, H);
      sx.fillStyle = horizon;
      sx.fillRect(0, 0, W, H);

      const n = Math.min(STAR_MAX, Math.round((W * H) / 3800));
      for (let i = 0; i < n; i++) {
        const s = stars[i];
        const tw = moving ? 0.55 + 0.45 * Math.sin(t * s.sp + s.ph) : 0.8;
        sx.globalAlpha = s.a * tw * (1 - s.y * 0.6);
        const r = s.r * 3;
        sx.drawImage(star, s.x * W - r, s.y * H - r, r * 2, r * 2);
      }

      sx.globalCompositeOperation = 'lighter';
      sx.imageSmoothingEnabled = true;
      sx.imageSmoothingQuality = 'high';
      sx.globalAlpha = 1;
      sx.drawImage(low, 0, 0, LW, LH, 0, 0, W, H);
      sx.globalAlpha = 0.33;
      sx.drawImage(low, 0, 0, LW, LH, -W * 0.04, -H * 0.07, W * 1.08, H * 1.12);
      sx.globalAlpha = 1;
      sx.globalCompositeOperation = 'source-over';
    };

    const animates = () => live && !reduced.matches;
    const frame = (now: number) => {
      ptr.act += (ptr.tgt - ptr.act) * 0.04;
      ptr.sx += (ptr.x - ptr.sx) * 0.05;
      ptr.sy += (ptr.y - ptr.sy) * 0.05;
      draw(STILL_T + now / 1000, true);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (animates() && !document.hidden) raf = requestAnimationFrame(frame);
      else draw(STILL_T, false);
    };

    const onMove = (e: PointerEvent) => {
      ptr.x = e.clientX / W;
      ptr.y = e.clientY / H;
      ptr.tgt = 1;
    };
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) ptr.tgt = 0;
    };
    const onResize = () => {
      resize();
      if (!animates()) draw(STILL_T, false);
    };
    // Don't spend frames on a tab nobody is looking at
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    resize();
    start();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    reduced.addEventListener?.('change', start);
    if (live) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('mouseout', onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      reduced.removeEventListener?.('change', start);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [live]);

  return (
    <div className="ambient" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-sky" />
    </div>
  );
}
