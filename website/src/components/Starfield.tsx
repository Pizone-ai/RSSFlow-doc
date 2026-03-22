'use client';

import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = 200; // 稍微增加数量

    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
      twinkleSpeed: number;
      color: string;
      layer: number; // 增加分层

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        
        // 分层逻辑：0(远), 1(中), 2(近)
        this.layer = Math.floor(Math.random() * 3);
        
        if (this.layer === 0) {
          this.size = Math.random() * 0.8 + 0.2;
          this.speedX = (Math.random() - 0.5) * 0.05;
          this.speedY = (Math.random() - 0.5) * 0.05;
          this.baseOpacity = Math.random() * 0.3 + 0.1;
        } else if (this.layer === 1) {
          this.size = Math.random() * 1.2 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.15;
          this.speedY = (Math.random() - 0.5) * 0.15;
          this.baseOpacity = Math.random() * 0.5 + 0.2;
        } else {
          this.size = Math.random() * 2.0 + 1.0;
          this.speedX = (Math.random() - 0.5) * 0.3;
          this.speedY = (Math.random() - 0.5) * 0.3;
          this.baseOpacity = Math.random() * 0.7 + 0.3;
        }

        this.opacity = this.baseOpacity;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        
        // 赋予微妙的颜色变化
        const colors = ['#ffffff', '#e2e8f0', '#94a3b8', '#bae6fd', '#fef08a'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 闪烁逻辑
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.twinkleSpeed) * 0.2;

        if (this.x < 0) this.x = canvas?.width || 0;
        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.y < 0) this.y = canvas?.height || 0;
        if (this.y > (canvas?.height || 0)) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.beginPath();
        // 给近处的星星增加一点点模糊发光感
        if (this.layer === 2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      // 绘制星云背景渐变，而非完全清除
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      gradient.addColorStop(0, '#020617'); // slate-950
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  if (!mounted) return <div className="fixed inset-0 bg-slate-950 -z-10" />;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-slate-950 -z-20"
    />
  );
};
