import React from "react";
import classNames from "classnames";
import Link from "gatsby-link";

import CastInfo from "../CastInfo/CastInfo";
import "./CastTile.css";

class CastTile extends React.Component {
  render() {
    const { member, hover, showInfo, link } = this.props;
    const { name, id } = member.authorData;
    const { imageUrl } = member;
    console.log(id);
    console.log(`author/${id}`);
    const role = member.postData ? member.postData.role : null;
    const tileStyle = {
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image})`
      backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.2) 100%),
        url(${imageUrl})`
    };
    const linkWrap = component => (
      <Link to={`/author/${id}`} className="no-dec">
        {component}
      </Link>
    );
    if (imageUrl) {
      const component = (
        <div
          style={tileStyle}
          className={classNames("cast-tile", { "cast-tile-hover": hover })}
        >
          {name && showInfo && <CastInfo name={name} role={role} />}
          {/* <img src={image} className="background-img" /> */}
        </div>
      );
      console.log(link);
      if (link) {
        return linkWrap(component);
      } else {
        return component;
      }
    } else {
      return null;
    }
  }
}

export default CastTile;
