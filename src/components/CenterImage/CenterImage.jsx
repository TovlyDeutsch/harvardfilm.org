import React from "react";
import "./CenterImage.css";

class CenterImage extends React.Component {
  render() {
    const { width, src } = this.props;
    return (
      <div className="centerImageContainer">
        <img src={src} style={{width: '100%'}}/>
      </div>
    )
  }
}

export default CenterImage;
