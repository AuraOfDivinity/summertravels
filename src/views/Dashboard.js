/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import video from "../assets/medias/360video.mp4";
import { Pannellum, PannellumVideo } from "pannellum-react";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="8">
              <Card style={{ padding: "20px" }}>
                {/* <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                  
                </CardFooter> */}
                <PannellumVideo
                  video={video}
                  loop
                  width="100%"
                  height="600px"
                  pitch={10}
                  yaw={180}
                  hfov={140}
                  minHfov={50}
                  maxHfov={180}
                  controls={true}
                  mouseZoom={false}
                >
                  <Pannellum.Hotspot
                    type="custom"
                    pitch={31}
                    yaw={150}
                    handleClick={(evt, name) => this.hanldeClick(name)}
                    name="hs1"
                  />

                  <Pannellum.Hotspot
                    type="info"
                    pitch={31}
                    yaw={-57}
                    text="Info"
                    URL="https://github.com/farminf"
                  />
                </PannellumVideo>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
