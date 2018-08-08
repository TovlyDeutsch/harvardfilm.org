import React from "react";
import Flickity from "flickity";
import "./CastTile.css";

class CastTile extends React.Component {
  render() {
    const { member } = this.props;
    const { name, image } = member.authorData;
    const { role } = member.postData;
    const tileStyle = {
      backgroundImage: `url(${image})`
    };
    if (name && role && image) {
      return (
        <div style={tileStyle} className="cast-tile">
          <span className="cast-tile-name">{name}</span>
          <span className="cast-tile-role">{role}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CastTile;
