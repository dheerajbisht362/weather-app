import { useEffect, useState } from "react";
import InputHead from "./components/header";
import LineGraph from "./components/line-graph";
import WeekTemperature from "./components/week-temperature";

function App() {
  const [location, setLocation] = useState({
    lat: 28.6738274,
    lon: 77.1642584, // default location
  });

  const [currLocParameter, setCurrLocParameter] = useState({
    currTemp: 24,
    tempMax: 31,
    tempMin: 22,
    sunrise: "6:02 AM",
    sunset: "7:14 PM",
    pressure: 1024,
    humidity: 70,
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPositionData);
    }
  }

  function setPositionData(position) {
    setLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  function setLocationCorrd(lat, lon) {
    setLocation({
      lat,
      lon,
    });
  }

  function renderLocationParameter() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setCurrLocParameter({
            currTemp: res?.main?.temp,
            tempMax: res?.main?.temp_max,
            tempMin: res?.main?.temp_min,
            sunrise: res?.sys?.sunrise,
            sunset: res?.sys?.sunset,
            pressure: res?.main?.pressure,
            humidity: res?.main?.humidity,
          });
        }
      });
  }

  useEffect(() => {
    renderLocationParameter();
  }, [location]);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App container-md mt-4 d-flex flex-column justify-content-center">
      <InputHead setLocationCorrd={setLocationCorrd} />
      <WeekTemperature />
      <LineGraph currLocParameter={currLocParameter} />
    </div>
  );
}

export default App;
