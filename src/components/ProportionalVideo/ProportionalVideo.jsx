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
        allow="encrypted-media"
        allowFullScreen
      />
    );
  }
}

export default ProportionalVideo;
