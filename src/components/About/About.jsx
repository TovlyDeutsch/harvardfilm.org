import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="hero-container">
        <figure className="hero-img">
          <img
            width="100%"
            height="auto"
            src="img/film-set.jpg"
            className="vc_single_image-img attachment-full"
            alt=""
          />
        </figure>
        <div className="hero-text-wrapper">
          <h2 className="hero-statement">About Us</h2>
          <h3 className="intro-subheading">
            HUFA is fostering a fun and inclusive filmmaking community on
            Harvard's campus.
          </h3>
          <p className="hero-description">
            HUFA, founded in 2017, is dedicated to facilitating film production
            at Harvard via club-wide film projects, educational workshops,
            feedback sessions among other programming. Early ideation for the
            club began in 2016 and we were approved as a provisional recognized
            student organization in the Fall of 2017. We have entered{" "}
            <a href="https://www.youtube.com/watch?v=T3jlDUCIFtE">
              multiple film competitions
            </a>
            &nbsp;hosted our first 48-hour Film Festival for the Arts First
            Weekend in Spring 2018. We are continually seeking new members from
            diverse backgrounds to grow and improve our up-and-coming club. If
            you’re a student, company, or anyone interested in the future of
            filmmaking at Harvard, please get in touch!
          </p>
          {/*
          <div className="view_more_button">
        	  <a className="view_more_link" href="http://www.hcs.harvard.edu/hufa/?page_id=1836" title="">VIEW MORE <i className="vc_btn3-icon fa fa-long-arrow-right"></i></a>
          </div>
          */}
        </div>
      </div>
    );
  }
}

export default About;
