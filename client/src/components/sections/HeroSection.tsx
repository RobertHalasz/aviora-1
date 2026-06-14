/**
 * AVIORA — Hero Section (Upgraded)
 * Design: WebGL-powered cinematic hero with crossfading Dubai/Miami imagery
 * - Three cinematic full-screen images crossfade every 5s
 * - WebGL particle field overlay (floating data points)
 * - Ken Burns slow zoom effect on each image
 * - Dark overlay gradient for text legibility
 * - Text content: headline, subheadline, CTAs, proof points
 */

import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663706999420/bt2aUCx6ZRoJ6xtRuMrVHh/hero-video-frame1-dNJPiH7iaRDzKrSZRFZbB7.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663706999420/bt2aUCx6ZRoJ6xtRuMrVHh/hero-video-frame2-J53YSBkXrhvfoqB4EoGCuh.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663706999420/bt2aUCx6ZRoJ6xtRuMrVHh/hero-video-frame3-QWYunRDD8p7MnfkydXjRTE.webp",
];

const CAPTIONS = ["Dubai", "Miami", "Intelligence"];

// WebGL particle field
function initWebGL(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  if (!gl) return null;

  const vsSource = `
    attribute vec2 a_position;
    attribute float a_size;
    attribute float a_alpha;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying float v_alpha;
    void main() {
      vec2 pos = a_position;
      pos.y += sin(u_time * 0.3 + a_position.x * 3.0) * 0.008;
      pos.x += cos(u_time * 0.2 + a_position.y * 2.0) * 0.005;
      gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
      gl_PointSize = a_size;
      v_alpha = a_alpha;
    }
  `;
  const fsSource = `
    precision mediump float;
    varying float v_alpha;
    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);
      if (dist > 0.5) discard;
      float alpha = (1.0 - dist * 2.0) * v_alpha;
      gl_FragColor = vec4(0.6, 0.75, 1.0, alpha);
    }
  `;

  function compileShader(type: number, src: string) {
    const s = gl!.createShader(type)!;
    gl!.shaderSource(s, src);
    gl!.compileShader(s);
    return s;
  }

  const prog = gl.createProgram()!;
  gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const N = 180;
  const positions = new Float32Array(N * 2);
  const sizes = new Float32Array(N);
  const alphas = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    positions[i * 2] = Math.random();
    positions[i * 2 + 1] = Math.random();
    sizes[i] = 1.5 + Math.random() * 2.5;
    alphas[i] = 0.15 + Math.random() * 0.35;
  }

  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(prog, "a_position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const sizeBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuf);
  gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
  const sizeLoc = gl.getAttribLocation(prog, "a_size");
  gl.enableVertexAttribArray(sizeLoc);
  gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, 0, 0);

  const alphaBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuf);
  gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.STATIC_DRAW);
  const alphaLoc = gl.getAttribLocation(prog, "a_alpha");
  gl.enableVertexAttribArray(alphaLoc);
  gl.vertexAttribPointer(alphaLoc, 1, gl.FLOAT, false, 0, 0);

  const timeLoc = gl.getUniformLocation(prog, "u_time");
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  return { gl, prog, timeLoc, N };
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [prevImg, setPrevImg] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const glRef = useRef<ReturnType<typeof initWebGL>>(null);
  const rafRef = useRef<number>(0);

  // WebGL animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      glRef.current?.gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);
    glRef.current = initWebGL(canvas);

    const start = performance.now();
    const render = (now: number) => {
      const ctx = glRef.current;
      if (!ctx) return;
      const { gl, timeLoc, N } = ctx;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLoc, (now - start) / 1000);
      gl.drawArrays(gl.POINTS, 0, N);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Image crossfade cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImg(activeImg);
      setFading(true);
      const next = (activeImg + 1) % HERO_IMAGES.length;
      setTimeout(() => {
        setActiveImg(next);
        setFading(false);
        setPrevImg(null);
      }, 1200);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeImg]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0a0c10" }}
    >
      {/* Background images with Ken Burns + crossfade */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === activeImg ? 1 : i === prevImg && fading ? 0 : 0,
            transition: i === activeImg ? "opacity 1.2s ease-in-out" : i === prevImg ? "opacity 1.2s ease-in-out" : "none",
            zIndex: i === activeImg ? 1 : i === prevImg ? 0 : -1,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: i === activeImg ? "kenBurns 12s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(105deg, rgba(8,10,16,0.82) 0%, rgba(8,10,16,0.55) 50%, rgba(8,10,16,0.35) 100%)",
        }}
      />

      {/* WebGL particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Content */}
      <div className="container relative z-30 w-full py-32 lg:py-0 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <div className="bronze-rule" />
            <span
              className="section-label"
              style={{ color: "oklch(0.72 0.06 55)" }}
            >
              {CAPTIONS[activeImg]} · UAE · Global Capital Corridors
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display-headline mb-6 animate-fade-up"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              color: "oklch(0.97 0.005 80)",
              animationDelay: "100ms",
              lineHeight: 1.05,
            }}
          >
            AI-Guided Real Estate Advisory for Complex Capital, Land, and Luxury Property Decisions
          </h1>

          {/* Subheadline */}
          <p
            className="text-base leading-relaxed mb-10 animate-fade-up"
            style={{
              color: "oklch(0.78 0.01 80)",
              maxWidth: "560px",
              animationDelay: "200ms",
            }}
          >
            Aviora Consultancy advises developers, investors, and strategic partners on land, luxury residential opportunities, redevelopment strategy, feasibility, joint ventures, and cross-border capital flows — with a strong focus on Dubai, the UAE, and UAE-Miami relations.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <button onClick={() => handleScroll("#contact")} className="btn-bronze">
              Schedule a Consultation
            </button>
            <button
              onClick={() => handleScroll("#services")}
              className="btn-bronze-outline"
              style={{ borderColor: "rgba(154,123,79,0.6)", color: "oklch(0.88 0.005 80)" }}
            >
              Explore Advisory Services
            </button>
          </div>

          {/* Trust line */}
          <p
            className="text-xs mb-8 animate-fade-up"
            style={{ color: "oklch(0.58 0.01 80)", letterSpacing: "0.02em", animationDelay: "400ms" }}
          >
            Trusted relationships across developers, capital partners, and advisory networks in the UAE, Miami, Turkey, Georgia, and beyond.
          </p>

          {/* Proof points */}
          <div
            className="flex flex-wrap gap-10 animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            {[
              { value: "15+", label: "Years Real Estate Experience" },
              { value: "10+", label: "Years Advisory & Investment" },
              { value: "UAE", label: "Focused, Globally Connected" },
            ].map((p) => (
              <div key={p.value} className="flex flex-col">
                <span
                  className="font-display text-4xl font-semibold italic"
                  style={{ color: "var(--bronze)" }}
                >
                  {p.value}
                </span>
                <span
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.55 0.01 80)", letterSpacing: "0.04em" }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrevImg(activeImg); setFading(true); setTimeout(() => { setActiveImg(i); setFading(false); setPrevImg(null); }, 1200); }}
            className="transition-all duration-300"
            style={{
              width: i === activeImg ? "2rem" : "0.4rem",
              height: "0.4rem",
              backgroundColor: i === activeImg ? "var(--bronze)" : "rgba(255,255,255,0.3)",
              border: "none",
              borderRadius: "2px",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 z-30 flex flex-col items-center gap-2">
        <span className="section-label" style={{ color: "oklch(0.45 0.01 80)", fontSize: "0.6rem" }}>Scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--bronze), transparent)" }} />
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
