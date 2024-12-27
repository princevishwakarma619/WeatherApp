import Card from './component/Card';
import Input from './component/input';
import Button from './component/Button';
import './App.css';
import { useEffect } from 'react';
import { useWeather } from './Context/Weather';

function App() {

  const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentUserLocationdata()
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="refresh" />
    </div>
  );
}

export default App;
