import React from "react";
import Flickity from "flickity";
import "./CastInfo.css";

class CastTile extends React.Component {
  render() {
    const { name, role } = this.props;
    if (name && role) {
      return (
        <div className="cast-member-label">
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
