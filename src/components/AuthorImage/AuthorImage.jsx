import React from "react";
import Img from "gatsby-image";
import "./AuthorImage.css";

class AuthorImage extends React.Component {
  render() {
    const { name, image, url } = this.props.author;
    if (image) {
      return (
        <Img
          className="author-img"
          resolutions={this.props.resolutions}
          alt={`${name}'s Picture`}
        />
      );
    }
    return null;
  }
}

export default AuthorImage;
