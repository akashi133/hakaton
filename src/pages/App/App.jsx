import About from '../../components/about/About';
import Autism from '../../components/autism/Autism';
import Map from '../../components/map/Map';
import Partners from '../../components/partner/Partners';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='ab-au'>
        <About />
        <Autism />
      </div>
      <Partners />
      <Map />
    </div>
  );
}

export default App;
