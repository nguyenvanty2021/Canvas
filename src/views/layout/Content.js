import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import DateTimeAxisStockChart from "../stockchart/StockChart with Date-Time Axis";
class Content extends Component {
  render() {
    return (
      <div className="content">
        <DateTimeAxisStockChart />
      </div>
    );
  }
}

export default Content;
