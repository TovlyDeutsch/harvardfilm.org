import React, { Component } from "react";
// import camera from "../../picture.svg";
import "./WhatWeDo.css";

class WhatWeDo extends Component {
  render() {
    return (
      <section>
        <h2 className="home-header">What We Do</h2>
        <div className="what_we_do">
          <div className="activity_block">
            <img
              src="img/clapperboard.svg"
              type="image/svg+xml"
              className="icon"
              alt="camera icon"
            />
            <h6 className="service-name">Equipment Loans</h6>
            <p>
              We are in the process ofacquiring video equipment to loan to our
              members.
            </p>
          </div>
          <div className="activity_block">
            <img
              src="img/camera.svg"
              type="image/svg+xml"
              className="icon"
              alt="camera icon"
            />
            <h6 className="service-name">Create Films!</h6>
            <p>
              Our mission is to gather filmmakers at Harvard to create videos
              (of all genres)
            </p>
          </div>
          <div className="activity_block">
            <img
              src="img/backdrop.png"
              type="image/svg+xml"
              className="icon"
              alt="camera icon"
            />
            <h6 className="service-name">Flexible Studio Space</h6>
            <p>
              We are looking in to securing a video studio somewhere on campus.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
