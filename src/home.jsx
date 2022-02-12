import React, { Component } from "react";
import logo from "./logo.svg";
import NavbarBox from "./components/navbar";
import SideMenu from "./components/sideMenu";
import CardBox from "./components/card";
import { Col, Row } from "react-bootstrap";

import BarChartBox from "./components/chart/barChart";
import LineChartBox from "./components/chart/LineChart";
import BarChartWithCustomizedEvent from "./components/chart/BarChartWithCustomizedEvent";
import BarChartNoPadding from "./components/chart/BarChartNoPadding";
import PieChartWithCustomizedLabel from "./components/chart/PieChartWithCustomizedLabel";
// import CustomContentOfTooltip from "./components/chart/CustomContentOfTooltip";
// imprt TwoLevelPieChart from "./components/chart/TwoLevelPieChart";
import TwoSimplePieChart from "./components/chart/TwoSimplePieChart";
// mport BrushBarChart from "./components/chart/BrushBarChart";
import AreaChartConnectNulls from "./components/chart/AreaChartConnectNulls";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarBox />
        {/* <SideMenu /> */}
        <Row>
          <Col md={3} sm={4} xs={12}>
            <CardBox title="  فعال " header="سفارش های" color="info" />
          </Col>
          <Col md={3} sm={4} xs={12}>
            <CardBox title=" تحویل شده " header="سفارش های" color="success" />
          </Col>
          <Col md={3} sm={4} xs={12}>
            <CardBox title=" لغو شده " header="سفارش های" color="danger" />
          </Col>
          <Col md={3} sm={4} xs={12}>
            <CardBox title="مجموع کل  " header="سفارش ها" color="primary" />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={4} xs={12}>
            <BarChartBox />
          </Col>
          <Col md={4} sm={4} xs={12}>
            <BarChartWithCustomizedEvent />
          </Col>
          <Col md={4} sm={4} xs={12}>
            <LineChartBox />
          </Col>
        </Row>
         <Row>
          <Col md={2} sm={4} xs={12}>
            <TwoSimplePieChart />
          </Col>
          <Col md={2} sm={4} xs={12}>
            <TwoSimplePieChart />
          </Col>
          <Col md={4} sm={4} xs={12}>
            <BarChartNoPadding />
          </Col>
          <Col md={4} sm={4} xs={12}>
            <AreaChartConnectNulls />
          </Col>
        </Row>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </React.Fragment>
    );
  }
}

export default HomePage;
