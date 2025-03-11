import { useRef, useEffect } from "react";

const Squares = ({
                     direction = "right",
                     speed = 1,
                     borderColor = "#999",
                     borderOpacity = 0.3,
                     squareSize = 40,
                     hoverFillColor = "#222",
                 }) => {
    const canvasRef = useRef(null);
    const requestRef = useRef(null);
    const gridOffset = useRef({ x: 0, y: 0 });
    const hoveredSquareRef = useRef(null);
    const lastTime = useRef(performance.now());
    const ctxRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        ctxRef.current = ctx;
        let dpr = 1;
        let animationId = null;

        // Optimized resize handler
        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Pre-calculate styles
        const strokeStyle = `rgba(${parseInt(borderColor.slice(1, 3), 16)}, ${parseInt(borderColor.slice(3, 5), 16)}, ${parseInt(borderColor.slice(5, 7), 16)}, ${borderOpacity})`;

        const drawGrid = (offsetX, offsetY) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw all vertical lines
            ctx.beginPath();
            for (let x = -offsetX % squareSize; x < canvas.width; x += squareSize) {
                ctx.moveTo(x + 0.5, 0);
                ctx.lineTo(x + 0.5, canvas.height);
            }
            
            // Draw all horizontal lines
            for (let y = -offsetY % squareSize; y < canvas.height; y += squareSize) {
                ctx.moveTo(0, y + 0.5);
                ctx.lineTo(canvas.width, y + 0.5);
            }
            
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = 1 * dpr;
            ctx.stroke();

            // Draw hover effect if needed
            if (hoveredSquareRef.current) {
                const { x, y } = hoveredSquareRef.current;
                ctx.fillStyle = hoverFillColor;
                ctx.fillRect(
                    x * squareSize - offsetX % squareSize,
                    y * squareSize - offsetY % squareSize,
                    squareSize,
                    squareSize
                );
            }
        };

        const animate = (timestamp) => {
            const deltaTime = timestamp - lastTime.current;
            lastTime.current = timestamp;
            
            // Calculate movement based on time
            const move = speed * (deltaTime / 16.67);
            
            switch (direction) {
                case "right": gridOffset.current.x += move; break;
                case "left": gridOffset.current.x -= move; break;
                case "up": gridOffset.current.y -= move; break;
                case "down": gridOffset.current.y += move; break;
                case "diagonal":
                    gridOffset.current.x += move;
                    gridOffset.current.y += move;
                    break;
            }

            // Keep offsets within bounds
            gridOffset.current.x %= squareSize;
            gridOffset.current.y %= squareSize;
            if (gridOffset.current.x < 0) gridOffset.current.x += squareSize;
            if (gridOffset.current.y < 0) gridOffset.current.y += squareSize;

            drawGrid(gridOffset.current.x, gridOffset.current.y);
            requestRef.current = requestAnimationFrame(animate);
        };

        // Throttled mouse handling
        let lastMouseUpdate = 0;
        const handleMouseMove = (e) => {
            const now = performance.now();
            if (now - lastMouseUpdate < 50) return;
            lastMouseUpdate = now;

            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * dpr;
            const y = (e.clientY - rect.top) * dpr;
            
            const gridX = Math.floor((x + gridOffset.current.x) / squareSize);
            const gridY = Math.floor((y + gridOffset.current.y) / squareSize);
            
            hoveredSquareRef.current = { x: gridX, y: gridY };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', () => hoveredSquareRef.current = null);
        
        // Start smooth animation
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', () => hoveredSquareRef.current = null);
        };
    }, [direction, speed, borderColor, borderOpacity, hoverFillColor, squareSize]);

    return <canvas ref={canvasRef} className="w-full h-full fixed top-0 left-0 -z-10" />;
};

export default Squares;

/*import Squares from './Squares';

<Squares
speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/> */