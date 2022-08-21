const picture =  ["/sunny.png","/sun.png","/clouds.png" ]
const weather = ["Sunny", "Cloudy" , "Rain"]
const day = ["MON", "TUE","WED", "TRUS", "FRI", "SAT", "SUN"]

function WeekTemperature() {

  return (
    <div className="d-flex justify-content-between" style={{"overflowX":"scroll"}}>
      {      
      day.map((el,i) => {
        const randomWeather = parseInt(Math.random() * 3);
        const minTempMax = parseInt(Math.random() * 10 + 25)
        return ( 
          <div className="p-2 mt-5" key={i}>
            <div><b>{el}</b></div>
            <div>{minTempMax}° {minTempMax+ 4}°</div>
            <div>
              <img alt="pic" width={40} src={picture[randomWeather]} />
            </div>
            <div><b>{weather[randomWeather]}</b></div>
          </div>
        );
      })}
    </div>
  );
}

export default WeekTemperature;
