import { Home } from "./components/Home";
import { AboutSection } from "./components/AboutSection";
import Squares from "./components/SquareBackground";
import SpeakerSection from "./components/SpeakerSection";

const App = () => {
    return (
        <>
            {/* Background squares layer */}
            <div className="fixed inset-0 -z-10">
                <Squares
                    direction="diagonal"
                    speed={0.2}
                    borderColor="#ffffff"
                    squareSize={80}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                />
            </div>

            {/* Content layer */}
            <div className="relative">
                <Home />
                <AboutSection />
                <SpeakerSection/>
            </div>
        </>
    );
};

export default App;
