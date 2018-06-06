import React from "react";
import "./PostHeader.css";

class PostHeader extends React.Component {
  render() {

    const { thumbnail, children } = this.props;
    var styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)), 
        url(${thumbnail})`
    }
    return (
      <div className='post-opener' style={styles}>
        <header className="post-header">
          {children}
        </header>
      </div>
    );
  }
}

export default PostHeader;
