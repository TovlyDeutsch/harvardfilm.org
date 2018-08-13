import React from "react";
import Img from "gatsby-image";
import "./AuthorImage.css";

class AuthorImage extends React.Component {
  render() {
    const { name, image, url } = this.props.author;
    if (image) {
      return (
        <img className="author-img" src={image} alt="" />
        // <Img
        //   imgStyle={{
        //     width: 216,
        //     height: 270
        //   }}
        //   resolutions={this.props.resolutions}
        //   alt={`${name}'s Picture`}
        // />
      );
    }
    return null;
  }
}

export default AuthorImage;
