import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import WorkoutGrid from "./components/WorkoutGrid";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider">
          <hr />
        </div>
        <WorkoutGrid />
        <div className="section-divider">
          <hr />
        </div>
        <Features />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
