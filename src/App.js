import './App.css';
import Globe from 'react-globe.gl';

function App() {

  

  return (
    <div className="App">
      <Globe 
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"


      />
    </div>
  );
}

export default App;
