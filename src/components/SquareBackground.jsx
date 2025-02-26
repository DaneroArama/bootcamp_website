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
    const numSquaresX = useRef(0);
    const numSquaresY = useRef(0);
    const gridOffset = useRef({ x: 0, y: 0 });
    const hoveredSquareRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 0.5;
            
            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            // Convert hex color to rgba
            const hexToRgba = (hex, opacity) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${opacity})`;
            };

            for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
                for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
                    const squareX = x - (gridOffset.current.x % squareSize);
                    const squareY = y - (gridOffset.current.y % squareSize);

                    if (
                        hoveredSquareRef.current &&
                        Math.floor((x - startX) / squareSize) ===
                        hoveredSquareRef.current.x &&
                        Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, squareSize, squareSize);
                    }

                    ctx.strokeStyle = hexToRgba(borderColor, borderOpacity);
                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }
        };

        const updateAnimation = () => {
            // Draw grid first
            drawGrid();

            // Only update position if speed is not 0
            if (speed !== 0) {
                switch (direction) {
                    case "right":
                        gridOffset.current.x =
                            (gridOffset.current.x - speed + squareSize) % squareSize;
                        break;
                    case "left":
                        gridOffset.current.x =
                            (gridOffset.current.x + speed + squareSize) % squareSize;
                        break;
                    case "up":
                        gridOffset.current.y =
                            (gridOffset.current.y + speed + squareSize) % squareSize;
                        break;
                    case "down":
                        gridOffset.current.y =
                            (gridOffset.current.y - speed + squareSize) % squareSize;
                        break;
                    case "diagonal":
                        gridOffset.current.x =
                            (gridOffset.current.x - speed + squareSize) % squareSize;
                        gridOffset.current.y =
                            (gridOffset.current.y - speed + squareSize) % squareSize;
                        break;
                    default:
                        break;
                }
            }

            // Continue animation frame
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            const hoveredSquareX = Math.floor(
                (mouseX + gridOffset.current.x - startX) / squareSize
            );
            const hoveredSquareY = Math.floor(
                (mouseY + gridOffset.current.y - startY) / squareSize
            );

            if (
                !hoveredSquareRef.current ||
                hoveredSquareRef.current.x !== hoveredSquareX ||
                hoveredSquareRef.current.y !== hoveredSquareY
            ) {
                hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
            }
        };

        const handleMouseLeave = () => {
            hoveredSquareRef.current = null;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [direction, speed, borderColor, borderOpacity, hoverFillColor, squareSize]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full border-none block bg-black overflow-hidden"
        ></canvas>
    );
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