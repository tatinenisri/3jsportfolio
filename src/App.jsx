import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Works2 } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* 🌟 Single Stars Background for All Sections After Hero */}
        <div className="relative z-0">
          <StarsCanvas /> {/* Only one instance of StarsCanvas */}
          <About />
          <Experience />
          <Tech />
          <Works />
          <Works2 />
          {/* <Feedbacks /> */}
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
