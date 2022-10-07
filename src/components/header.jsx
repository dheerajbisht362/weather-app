import { useState } from "react";

function InputHead({ setLocationCorrd }) {
  const [input, setInput] = useState("");
  // const [cities, setCities] = useState([]);
  const [citiesTemp, setCitiesTemp] = useState([]);

  function handleInput(e) {
    setInput(e.target.value);
    apiCallCity();
  }

  function apiCallCity() {
    if (input) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=e4c70ce6a6821649a416cb9521d5f4f8&limit=5`
      )
        .then((res) => res.json())
        .then((res) => {
          // setCities(res);
          getTemeratureCities(res);
        });
    }
  }

  async function getTemeratureCities(cities) {
    setCitiesTemp([...cities]);
  }

  function handleCityTemp(lat, lon, city) {
    setInput(city);
    setCitiesTemp([]);
    setLocationCorrd(lat, lon);
  }
  const picture = ["/sunny.png", "/sun.png", "/clouds.png"];

  return (
    <>
      <div className="b-3 d-flex justify-content-between border p-1 px-4 rounded shadow p-3 mb-1 bg-body rounded ">
        <img alt="location" src="/pin.png" width={25} />
        <input
          style={{ border: "0", width: "100%", height: "30px" }}
          className="pt-7"
          value={input}
          onInput={handleInput}
        />
        <img alt="src" src="/search.png" width={25} />
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{ background: "white", position: "absolute", opacity: "1.0" }}
          className="border rounded shadow "
        >
          {citiesTemp &&
            citiesTemp.length > 0 &&
            citiesTemp.map((el, i) => (
              <div
                key={i}
                className="d-flex justify-content-between"
                style={{ boxShadow: "2px 2px #c5c5c5" }}
                onClick={() => handleCityTemp(el.lat, el.lon, el.name)}
              >
                <div style={{ width: "500px" }} className="m-1 mx-5 fs-3">
                  {el.name}
                </div>
                <p style={{ float: "right", fontSize: "24px", margin: "2px" }}>
                  {parseInt(Math.random() * 10 + 25)}
                  <img
                    alt="pic"
                    width={40}
                    src={picture[parseInt(Math.random() * 3)]}
                  />
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default InputHead;
