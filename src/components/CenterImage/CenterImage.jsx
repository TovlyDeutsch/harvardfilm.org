import React from "react";
import "./CenterImage.css";

class CenterImage extends React.Component {
  render() {
    const { width, src } = this.props;
    console.log(src);
    return (
      <div className="centerImageContainer">
        <img
          src={src}
          style={{ width: "100%" }}
          alt="Logo of the Harvard Undergraduate Filmmakers Association"
        />
      </div>
    );
  }
}

export default CenterImage;
