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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d", { alpha: false });
        
        // Simple resize without pixel ratio handling
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Pre-calculate the stroke style
        const strokeStyle = `rgba(${parseInt(borderColor.slice(1, 3), 16)}, ${parseInt(borderColor.slice(3, 5), 16)}, ${parseInt(borderColor.slice(5, 7), 16)}, ${borderOpacity})`;

        const drawGrid = () => {
            // Clear with a solid background color
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Set line properties once
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = strokeStyle;
            
            // Calculate grid offset
            const offsetX = gridOffset.current.x % squareSize;
            const offsetY = gridOffset.current.y % squareSize;
            
            // Draw all squares
            for (let x = -offsetX; x < canvas.width + squareSize; x += squareSize) {
                for (let y = -offsetY; y < canvas.height + squareSize; y += squareSize) {
                    // Check if this square is hovered
                    const gridX = Math.floor((x + offsetX) / squareSize);
                    const gridY = Math.floor((y + offsetY) / squareSize);
                    
                    if (
                        hoveredSquareRef.current &&
                        gridX === hoveredSquareRef.current.x &&
                        gridY === hoveredSquareRef.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }
                    
                    ctx.strokeRect(x, y, squareSize, squareSize);
                }
            }
        };

        const updateAnimation = () => {
            // Update position based on direction and speed
            if (speed !== 0) {
                switch (direction) {
                    case "right":
                        gridOffset.current.x += speed;
                        break;
                    case "left":
                        gridOffset.current.x -= speed;
                        break;
                    case "up":
                        gridOffset.current.y -= speed;
                        break;
                    case "down":
                        gridOffset.current.y += speed;
                        break;
                    case "diagonal":
                        gridOffset.current.x += speed;
                        gridOffset.current.y += speed;
                        break;
                    default:
                        break;
                }
                
                // Keep offsets within squareSize range
                gridOffset.current.x = gridOffset.current.x % squareSize;
                gridOffset.current.y = gridOffset.current.y % squareSize;
                
                // Ensure offsets are always positive
                if (gridOffset.current.x < 0) gridOffset.current.x += squareSize;
                if (gridOffset.current.y < 0) gridOffset.current.y += squareSize;
            }

            // Draw grid
            drawGrid();

            // Continue animation frame
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const offsetX = gridOffset.current.x % squareSize;
            const offsetY = gridOffset.current.y % squareSize;

            const hoveredSquareX = Math.floor((mouseX + offsetX) / squareSize);
            const hoveredSquareY = Math.floor((mouseY + offsetY) / squareSize);

            hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
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