import Squares from "./components/ui/SquareBackground";
import CondolenceSection from "./components/CondolenceSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="min-h-screen relative">
            {/* Background squares layer */}
            <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
                <Squares
                    direction="diagonal"
                    speed={0.05}
                    borderColor="#ffffff"
                    opacity={0.5}
                    squareSize={150}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                    className="min-h-screen" // Changed from h-[1000vh]
                />
            </div>

            {/* Content layer */}
            <div className="relative z-10">
                <Navbar/>

                <CondolenceSection/>

                <Footer />
            </div>
        </div>
    );
};

export default App;
