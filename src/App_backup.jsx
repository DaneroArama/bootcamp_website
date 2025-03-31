import { Home } from "./components/Home";
import { AboutSection } from "./components/AboutSection";
import Squares from "./components/ui/SquareBackground";
import SpeakerSection from "./components/SpeakerSection";
import MentorSection from "./components/TrainerSection";
import HeroSection from "./components/HeroSection";
import TimetableSection from "./components/TimetableSection";
import SponsorSection from "./components/SponsorSection";
import MachineGunLoader from "./components/ui/MachineGunLoader";
import OrganizerSection from "./components/OrganizerSection";
import MerchandiseSection from './components/MerchandiseSection';
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
                <MachineGunLoader text="Design Your Future with Real World Experience! Yesssss!" wordClassName="font-malinton"/>
                <section className="pt-24" id="home">
                    <Home />
                </section>

                <HeroSection/>
                
                {/* Rest of the sections */}
                <section id="about">
                    <AboutSection />
                </section>

                <section id="speakers">
                    <SpeakerSection />
                </section>

                <section id="trainers">
                    <MentorSection />
                </section>

                    <OrganizerSection/>

                <section id="programs">
                    <TimetableSection />
                </section>
                
                <section id="sponsors">
                    <SponsorSection />
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default App;
