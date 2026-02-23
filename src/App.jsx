import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
          <Navbar/>
        <div className='relative z-0'>
          <Hero />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <About />
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Experience />
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Works />
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics/>
      <SpeedInsights/>
    </BrowserRouter>
  );
}

export default App;
