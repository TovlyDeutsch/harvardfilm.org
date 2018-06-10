import React from "react";
import "./FilmFormatting.css";

class FilmFormatting extends React.Component {
  render() {
    const { children, className, thumbnail } = this.props;
    return <article className={className}>{children}</article>;
  }
}

export default FilmFormatting;
