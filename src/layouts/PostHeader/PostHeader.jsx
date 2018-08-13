import React from "react";
import "./PostHeader.css";

class PostHeader extends React.Component {
  render() {
    const { thumbnail, children } = this.props;
    var styles = {
      backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.75) 0%,
          rgba(0, 0, 0, 0.75) 80%,
          #fff 80%
        ), 
        url(${thumbnail})`
    };
    return (
      <div className="post-opener" style={styles}>
        <header className="post-header">{children}</header>
      </div>
    );
  }
}

export default PostHeader;
