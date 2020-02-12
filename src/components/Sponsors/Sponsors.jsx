import React, { Component } from "react";
import "./Sponsors.css";

class Sponsors extends Component {
  render() {
    return (
      <section>
        <h2 className="home-header">Sponsors</h2>
        <div className="sponsors">
          <img
            src="img/sp_logo_light.png"
            className="sponsor-img"
            alt="studypool logo"
          />
          <div className="home-sponsor-text">
            <p className="sponsor-desc">
              <a
                href="https://www.studypool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
              >
                StudyPool
              </a>
              , on demand tutoring 24/7
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
