import { Home } from "./components/Home";
import { AboutSection } from "./components/AboutSection";
import Squares from "./components/SquareBackground";
import SpeakerSection from "./components/SpeakerSection";
import MentorSection from "./components/MentorSection";
import HeroSection from "./components/HeroSection";
import TimetableSection from "./components/TimetableSection";
import SponsorSection from "./components/SponsorSection";
import MachineGunLoader from "./components/MachineGunLoader";

const App = () => {
    return (
        <>
            {/* Background squares layer */}
            <div className="fixed inset-0 -z-10">
                <Squares
                    direction="diagonal"
                    speed={0.1}
                    borderColor="#ffffff"
                    squareSize={150}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                />
            </div>

            {/* Content layer */}
            <div className="relative">
                <MachineGunLoader text="Design Your Future with Real World Experience! Yesssss!" wordClassName="font-malinton"/>
                <Home />
                <HeroSection/>
                <AboutSection/>
                <SpeakerSection/>
                <MentorSection/>
                <TimetableSection/>
                <SponsorSection/>
            </div>
        </>
    );
};

export default App;
