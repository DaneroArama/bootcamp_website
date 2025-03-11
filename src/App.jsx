import { Home } from "./components/Home";
import { AboutSection } from "./components/AboutSection";
import Squares from "./components/ui/SquareBackground";
import SpeakerSection from "./components/SpeakerSection";
import MentorSection from "./components/MentorSection";
import HeroSection from "./components/HeroSection";
import TimetableSection from "./components/TimetableSection";
import SponsorSection from "./components/SponsorSection";
import MachineGunLoader from "./components/ui/MachineGunLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            {/* Background squares layer */}
            <div className="fixed inset-0 -z-10">
                <Squares
                    direction="diagonal"
                    speed={0.05}
                    borderColor="#ffffff"
                    squareSize={150}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                />
            </div>

            {/* Content layer */}
            <div className="relative">
                <Navbar/>
                <MachineGunLoader text="Design Your Future with Real World Experience! Yesssss!" wordClassName="font-malinton"/>
                <section className="pt-24" id="home">
                    <Home />
                </section>

                <HeroSection/>

                <section id="about">
                    <AboutSection />
                </section>

                <section id="speakers">
                    <SpeakerSection />
                </section>

                <section id="mentors">
                    <MentorSection />
                </section>

                <section id="programs">
                    <TimetableSection />
                </section>

                <section id="sponsors">
                    <SponsorSection />
                </section>

                <Footer />
            </div>
        </>
    );
};

export default App;
