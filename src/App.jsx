import Squares from "./components/ui/SquareBackground";
import CondolenceSection from "./components/CondolenceSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="min-h-screen relative bg-black">
                <Navbar/>
                <CondolenceSection/>
                <Footer />
        </div>
    );
};

export default App;
