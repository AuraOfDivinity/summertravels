import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";
import { Pannellum, PannellumVideo } from "pannellum-react";
import video from "../assets/medias/360video.mp4";

class SamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="8">
              <Card style={{ padding: "20px" }}>
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

export default SamplePage;
