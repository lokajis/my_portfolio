import { Routes, Route,useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portofolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import particles from './utils.js/particles';
import './App.scss'; 

function App() {
  //status if the navbar is open or not to deactivate or activate the pages befind
  const[status, setStatus] = useState(true);

// function that is being passed in navbar to retreve if the tpggle id true or false
  async function checkNavbarStatus  (x){
    setStatus(x);
    // console.log('your status is :', status);
  }
  const [init, setInit] = useState(false);

//Make the particles work
  useEffect(() => {
    initParticlesEngine(async (engine) => {
  
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const options = useMemo(
   particles,
    [],
  );
//finish particle cosde


//location
const location =  useLocation();
// console.log(location);
const renderPartticleJsInHomePage = location.pathname === '/' ;

  return (
    <div className="App">
      {/* Particles js */}
{
  renderPartticleJsInHomePage && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />  
}

         {/* Navbarr */}
      <Navbar navStatus = {checkNavbarStatus}/>
      {/* main page content */}
      <div className= { `App__main-page-content' ${status ? '': 'displayOff'}`} >
 <Routes >
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>

      </div>
     

    </div>

  );
}

export default App;
