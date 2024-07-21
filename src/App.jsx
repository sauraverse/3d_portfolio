import { BrowserRouter } from "react-router-dom";

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
    </BrowserRouter>
  );
}

export default App;
