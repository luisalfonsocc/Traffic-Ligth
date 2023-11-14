import React, { useState } from 'react';
import './index.css'; // Asegúrate de importar el archivo CSS

function App() {
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  const clickRedLight = () => {
    setRedLight(true);
    setYellowLight(false);
    setGreenLight(false);
  };

  const clickYellowLight = () => {
    setRedLight(false);
    setYellowLight(true);
    setGreenLight(false);
  };

  const clickGreenLight = () => {
    setRedLight(false);
    setYellowLight(false);
    setGreenLight(true);
  };

  return (
    <div className="semaforo-container">
      <div className="soporte-superior"></div>
    <div className="streetLightBg">
      
      <div
        className={`bulb redBulb ${redLight ? 'bulbOn' : ''}`}
        onClick={clickRedLight}
      ></div>
      <div
        className={`bulb yellowBulb ${yellowLight ? 'bulbOn' : ''}`}
        onClick={clickYellowLight}
      ></div>
      <div
        className={`bulb greenBulb ${greenLight ? 'bulbOn' : ''}`}
        onClick={clickGreenLight}
      ></div>
    </div>
    </div>
  );
}

export default App;


