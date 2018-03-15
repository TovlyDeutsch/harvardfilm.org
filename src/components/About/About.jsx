import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="film_for_all">
    		<figure className="opening_img">
            <img width="100%" height="auto" src="https://www.hcs.harvard.edu/hufa/wp-content/uploads/2015/12/discover-love-film-1.jpg" className="vc_single_image-img attachment-full" alt=""/>
    		</figure>
      <div className="right_text">
            <h1 className="top_text">Film for all</h1>
      		<div className="bottom_text">
      			<h5 className='middle_text'>HUFA is fostering filmmaking at Harvard and the wider Boston community.</h5>
            <p>HUFA, founded in 2017, is dedicated to facilitating video production at Harvard via club-wide film projects, educational workshops, feedback sessions among other programming. Early ideation for the club began in 2016 and we were approved as a provisional recognized student organization in the Fall of 2017. We are steadily entering <a href="https://www.youtube.com/watch?v=T3jlDUCIFtE">film competitions</a>&nbsp;and planning our first 48-hour Film Festival for the Arts First Weekend this Spring. We are continually seeking sponsorship to grow and support our up-and-coming club. If you’re a student, company, or anyone interested in the future of filmmaking, please get in touch!</p>
      		</div>
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
