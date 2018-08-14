import React, { Component } from "../../../node_modules/@types/react/index";
import camera from "../../picture.svg";
import "./WhatWeDo.css";

class WhatWeDo extends Component {
  render() {
    return (
      <section className="what_we_do">
        <div className="activity_block">
          <object
            data={camera}
            type="image/svg+xml"
            className="icon"
            alt="camera icon"
          >
            {" "}
          </object>
          <h6 className="service-name">Equipment Loans</h6>
          <p>
            We are in the process ofacquiring video equipment to loan to our
            members.
          </p>
        </div>
        <div className="activity_block">
          <object
            data={camera}
            type="image/svg+xml"
            className="icon"
            alt="camera icon"
          >
            {" "}
          </object>
          <h6 className="service-name">Create Films!</h6>
          <p>
            Our mission is to gather filmmakers at Harvard to create videos (of
            all genres)
          </p>
        </div>
        <div className="activity_block">
          <object
            data={camera}
            type="image/svg+xml"
            className="icon"
            alt="camera icon"
          >
            {" "}
          </object>
          <h6 className="service-name">Flexible Studio Space</h6>
          <p>
            We are looking in to securing a video studio somewhere on campus.
          </p>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
