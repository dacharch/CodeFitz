import Services from './components/Services/Services';
import Hero from './components/HeroSection/Hero';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
     <div id="main" className='container'>
        <NavBar/>
         <Hero/>
         <Services/> 
         <Footer/>
     </div>
  );
}

export default App;
