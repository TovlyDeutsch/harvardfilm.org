import React from "react";
import "./ProportionalVideo.css";

class ProportionalVideo extends React.Component {
  render() {
    const { videoLink } = this.props;
    return (
      // <div className="proportional-video-container">
        <iframe className="film-iframe" src={videoLink} frameBorder="0" allowFullScreen></iframe>
      // </div>
    )
  }
}

export default ProportionalVideo;
