import React from "react";
import "./PostHeader.css";

class PostHeader extends React.Component {
  render() {

    const { thumbnail, children } = this.props;
    console.log(thumbnail)
    var styles = {
     backgroundImage: `url(${thumbnail})`
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
