import ApexCharts from "apexcharts";
import { useEffect } from "react";

let options = {
  chart: {
    height: 350,
    type: "area",
    stacked: false,
  },
  colors: ["#2E93fA"],
  series: [
    {
      name: "Hourly temperature",
      data: [24, 26, 26, 30, 24, 22],
    },
  ],
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  xaxis: {
    categories: [6, 7, 8, 9, 10, 11],
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "solid",
  },
};

let chart2 = {
    chart: {
      height: 350,
      type: "area",
      stacked: false,
    },
    colors: ["#FEDB41"],
    series: [
      {
        name: "Sun Time",
        data: [-1, 0, 3 ,0, -1],
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [ 1.5 , 2, 3, 4, 4.5],
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
    },
  };


function LineGraph({currLocParameter}){
  useEffect(() => {
    let chart = new ApexCharts(document.querySelector("#charts"), options);
    chart.render();

    let charts2 = new ApexCharts(document.querySelector("#chart2"), chart2);
    charts2.render();
  }, []);

  return (
    <div className="shadow p-3 my-5 mx-2 bg-body rounded">
      <div>
        <b className="fw-6 h2 mx-4"> {currLocParameter?.currTemp || "26°"} </b>
        <img alt="cloud" width={60} src="/clouds.png" />
      </div>
      <div
        style={{ height: 400 }}
        className="mx-4 overflow-scroll"
        id="charts"
      ></div>
      <br />
      <div className="d-flex justify-content-around mt-3">
        <div className="p-4 col-5 fs-3" style={{ background: "#f3fbff" }}>
          <div>Pressure</div>
          <div>{currLocParameter?.pressure}</div>
        </div>
        <div style={{ background: "#f3fbff" }} className="p-4 col-5 fs-3">
          <div>Humidity</div>
          <div>{currLocParameter?.humidity}</div>
        </div>
      </div>

      <div className="d-flex justify-content-between m-3">
        <div className="p-4 fs-3">
          <div>Sunrise</div>
          <div>{new Date(currLocParameter.sunrise).getHours()}:{new Date(currLocParameter.sunrise).getMinutes()}</div>
        </div>
        <div className="p-4 fs-3">
          <div>Sunset</div>
          <div>{new Date(currLocParameter.sunset).getHours()}:{new Date(currLocParameter.sunset).getMinutes()}</div>
        </div>
      </div>
      <div
        style={{ height: 400 }}
        className="mx-4"
        id="chart2"
      ></div>
    </div>
  );
}

export default LineGraph;
