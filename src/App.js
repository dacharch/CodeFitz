import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
     <div className='container'>
        <NavBar/>
        <Hero/>
        <Services/>
        <Footer/>
     </div>
  );
}

export default App;
