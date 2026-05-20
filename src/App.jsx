import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
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
        <Stats />
        <div id="log">
          <WorkoutGrid />
        </div>
        <Features />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
