function InputHead({ input, handleInput, cities, handleCityTemp, citiesTemp }) {
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
          {cities &&
            cities.length > 0 &&
            cities.map((el, i) => (
              <div
                key={i}
                className="d-flex justify-content-between"
                onClick={() => handleCityTemp(el.lat, el.lon, el.name)}
              >
                <div style={{ width: "500px" }} className="m-1 mx-5 fs-3">
                  {el.name}
                </div>
              </div>
            ))}
            {console.log(citiesTemp)}
          {citiesTemp &&
            citiesTemp.length > 0 &&
            citiesTemp.map((el) => {
              <p style={{ float: "right" }}>{el}</p>;
            })}
        </div>
      </div>
    </>
  );
}

export default InputHead;
