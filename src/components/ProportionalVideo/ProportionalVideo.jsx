import React from "react";
import "./ProportionalVideo.css";

class ProportionalVideo extends React.Component {
  render() {
    const { videoLink } = this.props;
    return (
      <iframe
        className="film-iframe"
        src={videoLink}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}

export default ProportionalVideo;
