import React, { useEffect, useRef } from 'react';

const isMobileDevice = () => {
    // Simple check for mobile devices
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
};

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let stars = generateStars(100, canvas.width, canvas.height);

        function generateStars(count: number, width: number, height: number) {
            let stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2,
                    velocity: Math.random() * 0.5 + 0.1, // Adding velocity
                    color: 'white'
                });
            }
            return stars;
        }

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const velocityFactor = isMobileDevice() ? 0.25 : 1;
            stars.forEach(star => {
                star.x -= star.velocity * velocityFactor; // Adjust velocity for mobile
                if (star.x < 0) { // Reset star position if it goes off screen
                    star.x = canvas.width;
                    star.y = Math.random() * canvas.height;
                }
                ctx.fillStyle = star.color;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
                ctx.fill();
            });
        }

        const animate = () => {
            drawStars();
            requestAnimationFrame(animate);
        }

        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;

            const relativeMouseX = mouse.current.x / window.innerWidth;
            stars.forEach(star => {
                const baseVelocity = 0.5;
                const maxVelocity = 0.5; 

                star.velocity = baseVelocity + (maxVelocity - baseVelocity) * relativeMouseX;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = generateStars(100, canvas.width, canvas.height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} />;
};

export default Starfield;
