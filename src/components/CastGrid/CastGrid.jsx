import React from "react";
import CastTile from "../CastTile/CastTile";
import "./CastGrid.css";

class CastGrid extends React.Component {
  render() {
    const { cast } = this.props;
    console.log(cast);
    if (cast.length > 0) {
      let castTiles = cast.map(member => <CastTile member={member} />);
      // TODO add loading animation
      return (
        <div>
          <h2 className="cast-title">Cast</h2>{" "}
          <div className="cast-grid">{castTiles}</div>
        </div>
      );
    }
    return null;
  }
}

export default CastGrid;
