import React from "react";
import BackgroundSlider from "react-background-slider";
import beach from "../assets/landing/beach.jpg";
import mountain from "../assets/landing/mountain.jpg";
import desert from "../assets/landing/desert.jpg";
import { Card, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <BackgroundSlider
        images={[beach, mountain, desert]}
        duration={5}
        transition={2}
      />
      <Card
        style={{
          width: "20%",
          height: "fitcontent",
          margin: "0 auto",
          opacity: "0.85",
          textAlign: "center",
          marginTop: "15%",
          fontSize: "24px",
          padding: "50px 10px",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600" }}>
          Explore the world at your fingertips
        </span>
        <Link to="/dashboard">
          <Button color="success">Let's Travel</Button>
        </Link>
      </Card>
    </>
  );
};

export default Landing;
