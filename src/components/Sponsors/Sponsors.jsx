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
            <p>
              <a
                href="https://www.studypool.com/studyGuides"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
                data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.studypool.com/studyGuides&amp;source=gmail&amp;ust=1526406473350000&amp;usg=AFQjCNGAzlAe9WCyBU4CRynjh4kzCqHw7g"
              >
                Literature Study Guides
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://www.studypool.com/homework-help-answers"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
                data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.studypool.com/studyGuides&amp;source=gmail&amp;ust=1526406473350000&amp;usg=AFQjCNGAzlAe9WCyBU4CRynjh4kzCqHw7g"
              >
                Homework Answers
              </a>&nbsp;at Studypool.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
