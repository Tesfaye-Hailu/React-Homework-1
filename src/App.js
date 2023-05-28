import React, { useState } from 'react';
import Weather from './Components/Weather';

const App = () => {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <Weather city={city} onCityChange={handleCityChange} />
    </div>
  );
};

export default App;