import React from "react";
import Flickity from "flickity";
import "./CastTile.css";

class CastTile extends React.Component {
  render() {
    const { member } = this.props;
    const { name, image } = member.authorData;
    const { role } = member.postData;
    const tileStyle = {
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image})`
      backgroundImage: `url(${image})`
    };
    console.log(tileStyle);
    if (name && role && image) {
      return (
        <div style={tileStyle} className="cast-tile">
          <div className="cast-member-label">
            <span className="cast-tile-name">{name}</span>
            <span className="cast-tile-role">{role}</span>
          </div>
          {/* <img src={image} className="background-img" /> */}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CastTile;
