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
// reactstrap components
import { Card, Row, Col, CardHeader, CardBody } from "reactstrap";
// core components
import beach from "../assets/medias/MalibuBeach.mp4";
import { Pannellum, PannellumVideo } from "pannellum-react";
import mapboxgl from "mapbox-gl";
import { withRouter } from "react-router-dom";
import locationList from "../data/data";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXVyYW9mZGl2aW5pdHkiLCJhIjoiY2tlZ3M1amtpMDN0NTJ5bnAycjd1eWRudiJ9.sgCA_B-BmkXjn7qfkPbiLg";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 8,
      data: locationList[1],
      hotspot: 1,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v9",
      center: [this.state.data.location[1], this.state.data.location[0]],
      zoom: this.state.zoom,
    });
  }

  handleClick = () => {
    this.props.history.push(`/admin/${this.state.data.nextHotspot}`);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="9">
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
                  video={this.state.data.video}
                  loop
                  width="100%"
                  height="80vh"
                  pitch={10}
                  yaw={180}
                  hfov={140}
                  minHfov={50}
                  maxHfov={180}
                  controls={true}
                  mouseZoom={true}
                >
                  <Pannellum.Hotspot
                    type="custom"
                    pitch={31}
                    yaw={150}
                    handleClick={(evt, name) => this.handleClick(name)}
                    name="hs1"
                  />

                  <Pannellum.Hotspot
                    type="info"
                    pitch={31}
                    yaw={-57}
                    text={data.facts[0]}
                  />
                </PannellumVideo>
              </Card>
            </Col>

            <Col lg="3">
              <Card style={{ width: "100%", height: "41vh" }}>
                <CardHeader>
                  <h5 className="title">Location</h5>
                  <CardBody>
                    <div
                      ref={(el) => (this.mapContainer = el)}
                      style={{ width: "100%", height: "25vh" }}
                    />
                  </CardBody>
                </CardHeader>
              </Card>
              <Card style={{ width: "100%", height: "41vh" }}>
                <CardHeader>
                  <h5 className="title">Facts</h5>
                </CardHeader>
                <CardBody>
                  <span style={{ display: "block" }}>1. {data.facts[2]}</span>
                  <span style={{ display: "block" }}>2. {data.facts[3]}</span>
                  <span style={{ display: "block" }}>3. {data.facts[4]}</span>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(Dashboard);
