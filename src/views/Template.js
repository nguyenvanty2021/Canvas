import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter } from "react-router-dom";
import Content from "./layout/Content";
class Template extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Row>
            <Col
              xl={{ span: 7, offset: 3 }}
              lg={{ span: 8, offset: 3 }}
              xs={{ span: 8, offset: 2 }}
            >
              <Content />
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    );
  }
}

export default Template;
