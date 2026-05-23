'use client';

import React, { useEffect, useRef } from 'react';

class Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleAngle: number;
  color: string;
  layer: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    
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
    this.twinkleSpeed = Math.random() * 0.03 + 0.01;
    this.twinkleAngle = Math.random() * Math.PI * 2;
    
    // 赋予微妙的颜色变化
    const colors = ['#ffffff', '#e2e8f0', '#94a3b8', '#bae6fd', '#fef08a'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    // 闪烁逻辑
    this.twinkleAngle += this.twinkleSpeed;
    this.opacity = this.baseOpacity + Math.sin(this.twinkleAngle) * 0.15;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
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

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star(canvas.width, canvas.height));
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
        star.update(canvas.width, canvas.height);
        star.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // 平滑比例缩放，免去销毁与重建的 GC 开销
      stars.forEach((star) => {
        star.x = (star.x / (oldWidth || 1)) * newWidth;
        star.y = (star.y / (oldHeight || 1)) * newHeight;
      });
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
