import React from "react";
import Flickity from "react-flickity-component";
import CastTile from "../CastTile/CastTile";
// import "./flickity.css";

class CastCarousel extends React.Component {
  render() {
    const { cast } = this.props;
    const flickityOptions = {
      autoPlay: true,
      pageDots: false
    };
    if (cast.length > 0) {
      let castTiles = cast.map(member => <CastTile member={member} />);
      return <Flickity options={flickityOptions}>{castTiles}</Flickity>;
    }
    return null;
  }
}

export default CastCarousel;
