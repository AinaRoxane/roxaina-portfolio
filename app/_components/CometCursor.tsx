"use client";

import { useEffect } from "react";

export default function CometCursor() {
  useEffect(() => {
    const canvas = document.getElementById("cometCanvas") as HTMLCanvasElement | null;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Non-null aliases for use inside closures (TypeScript doesn't
    // retain narrowing in nested function declarations).
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = context;

    let W: number;
    let H: number;

    function resize() {
      W = canvasEl.width = window.innerWidth;
      H = canvasEl.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    let mouseX = -9999;
    let mouseY = -9999;
    let mouseActive = false;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    });

    document.addEventListener("mouseleave", function () {
      mouseActive = false;
    });

    document.addEventListener(
      "touchmove",
      function (e) {
        const t = e.touches[0];
        if (t) {
          mouseX = t.clientX;
          mouseY = t.clientY;
          mouseActive = true;
        }
      },
      { passive: true }
    );

    document.addEventListener("touchend", function () {
      mouseActive = false;
    });

    const particles: any[] = [];
    const MAX_PARTICLES = 450;

    // Colors: warm cream / bronze palette
    const palette = [
      { r: 228, g: 225, b: 195 }, // cream
      { r: 192, g: 175, b: 145 }, // muted bronze
      { r: 160, g: 107, b: 84 }, // bronze
      { r: 255, g: 248, b: 220 }, // light cream
      { r: 210, g: 190, b: 160 }, // warm sand
    ];

    function randomColor() {
      return palette[Math.floor(Math.random() * palette.length)];
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      decay: number;
      r: number;
      g: number;
      b: number;
      twinkle: number;
      twinkleSpeed: number;

      constructor(x: number, y: number) {
        const spread = 2.5;
        this.x = x + (Math.random() - 0.5) * spread;
        this.y = y + (Math.random() - 0.5) * spread;
        const speed = 0.15 + Math.random() * 0.35;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 0.05;
        this.size = 0.6 + Math.random() * 1.8;
        this.life = 1;
        this.decay = 0.008 + Math.random() * 0.018;
        const col = randomColor();
        this.r = col.r;
        this.g = col.g;
        this.b = col.b;
        this.twinkle = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.05 + Math.random() * 0.08;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.995;
        this.vy *= 0.995;
        this.life -= this.decay;
        this.size *= 0.997;
        this.twinkle += this.twinkleSpeed;
        return this.life > 0 && this.size > 0.02;
      }

      draw(drawCtx: CanvasRenderingContext2D) {
        const alpha = this.life * 0.85;
        const flicker = 0.7 + 0.3 * Math.sin(this.twinkle);
        const finalAlpha = alpha * flicker;
        const radius = Math.max(this.size, 0.05);

        // glow
        drawCtx.shadowColor = `rgba(${this.r}, ${this.g}, ${this.b}, ${finalAlpha * 0.5})`;
        drawCtx.shadowBlur = radius * 4;

        drawCtx.globalAlpha = finalAlpha;
        drawCtx.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
        drawCtx.beginPath();
        drawCtx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        drawCtx.fill();

        // extra tiny sparkle core
        if (radius > 0.8 && this.life > 0.5) {
          drawCtx.shadowBlur = radius * 8;
          drawCtx.globalAlpha = finalAlpha * 0.3;
          drawCtx.fillStyle = `rgb(255, 250, 235)`;
          drawCtx.beginPath();
          drawCtx.arc(this.x, this.y, radius * 0.3, 0, Math.PI * 2);
          drawCtx.fill();
        }

        drawCtx.shadowBlur = 0;
        drawCtx.globalAlpha = 1;
      }
    }

    function spawnBurst(count: number) {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) break;
        particles.push(new Particle(mouseX, mouseY));
      }
    }

    let frameCount = 0;

    function animate() {
      ctx.clearRect(0, 0, W, H);

      if (mouseActive && mouseX > 0 && mouseY > 0) {
        // spawn main trail
        const count = 2 + Math.floor(Math.random() * 3);
        spawnBurst(count);

        // spawn extra burst occasionally for sparkle
        if (frameCount % 3 === 0) {
          for (let i = 0; i < 1; i++) {
            if (particles.length < MAX_PARTICLES) {
              const p = new Particle(mouseX, mouseY);
              p.size = 0.3 + Math.random() * 0.8;
              p.decay = 0.02 + Math.random() * 0.03;
              particles.push(p);
            }
          }
        }

        // comet head glow
        const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 22);
        grad.addColorStop(0, "rgba(228, 225, 195, 0.45)");
        grad.addColorStop(0.3, "rgba(228, 225, 195, 0.20)");
        grad.addColorStop(0.7, "rgba(160, 107, 84, 0.10)");
        grad.addColorStop(1, "rgba(228, 225, 195, 0)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 22, 0, Math.PI * 2);
        ctx.fill();

        // inner bright core
        const core = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 6);
        core.addColorStop(0, "rgba(255, 250, 235, 0.6)");
        core.addColorStop(0.5, "rgba(228, 225, 195, 0.25)");
        core.addColorStop(1, "rgba(228, 225, 195, 0)");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // update & draw all particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (!p.update()) {
          particles.splice(i, 1);
          continue;
        }
        p.draw(ctx);
      }

      frameCount++;
      requestAnimationFrame(animate);
    }

    animate();

    // reduce particle count when tab hidden
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        // trim particles to save resources
        while (particles.length > 100) {
          particles.shift();
        }
      }
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="cometCanvas"></canvas>;
}