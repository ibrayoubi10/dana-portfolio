import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Approach from "./sections/Approach.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="app-frame">
      <div className="app-surface">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Services />
          <Approach />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
