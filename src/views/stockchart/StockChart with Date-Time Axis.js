import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../assets/canvasjs.stock.react";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const DateTimeAxisStockChart = () => {
  const [dataPoints2, setDataPoints2] = useState([]);
  const [dataPoints3, setDataPoints3] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const options = {
    theme: "light2",
    title: {
      text: "React StockChart with Date-Time Axis",
    },
    //   subtitles: [
    //     {
    //       text: "Price-Volume Trend",
    //     },
    //   ],
    animationEnabled: true,
    exportEnabled: true,
    charts: [
      {
        zoomEnabled: true,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM DD YYYY",
          },
        },
        axisY: {
          title: "Bitcoin Price",
          prefix: "$",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "$#,###.##",
          },
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Price (in USD)",
            type: "splineArea",
            color: "#3576a8",
            yValueFormatString: "$#,###.##",
            xValueFormatString: "MMM DD YYYY",
            dataPoints: dataPoints,
          },
        ],
      },
      {
        // zoomEnabled: true,
        height: 100,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        axisY: {
          title: "Volume",
          prefix: "$",
          tickLength: 0,
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Volume",
            yValueFormatString: "$#,###.##",
            type: "column",
            dataPoints: dataPoints2,
          },
        ],
      },
    ],
    navigator: {
      dynamicUpdate: true,
      data: [
        {
          dataPoints: dataPoints3,
        },
      ],

      slider: {
        minimum: new Date("2018-05-01"),
        maximum: new Date("2018-07-01"),
      },
      axisX: {
        labelFontColor: "black",
      },
    },
    //   rangeSelector: {
    //     enabled: false,
    //   },
  };

  const containerProps = {
    width: "100%",
    height: "450px",
    margin: "auto",
  };

  useEffect(() => {
    fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then((res) => res.json())
      .then((data) => {
        var dps1 = [],
          dps2 = [],
          dps3 = [];
        for (var i = 0; i < data.length; i++) {
          dps1.push({
            x: new Date(data[i].date),
            y: [
              Number(data[i].open),
              Number(data[i].high),
              Number(data[i].low),
              Number(data[i].close),
            ],
          });
          dps2.push({
            x: new Date(data[i].date),
            y: Number(data[i].volume_usd),
          });
          dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
        }
        setDataPoints2([...dps2]);
        setDataPoints3([...dps3]);
        setIsLoaded(true);
      });
    fetch("https://canvasjs.com/data/gallery/react/btcusd2017-18.json")
      .then((res) => res.json())
      .then((data) => {
        var dps = [];
        for (var i = 0; i < data.length; i++) {
          dps.push({
            x: new Date(data[i].date),
            y: Number(data[i].close),
          });
        }
        setIsLoaded(true);
        setDataPoints([...dps]);
      });
  }, []);

  return (
    <div>
      {
        // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
        isLoaded && (
          <CanvasJSStockChart
            containerProps={containerProps}
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        )
      }
    </div>
  );
};
export default DateTimeAxisStockChart;
