import React from "react";
import Link from "gatsby-link";
import "./PostFormatting.css";

class PostFormatting extends React.Component {
  render() {
    const { children, className, style, path } = this.props;
    console.log("true path", path);
    return (
      <Link to={path} className="no-dec">
        <article className={className} style={style}>
          {children}
        </article>
      </Link>
    );
  }
}

export default PostFormatting;
