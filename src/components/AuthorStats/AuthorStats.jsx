import React from "react";

class AuthorStats extends React.Component {
  render() {
    const { postEdges } = this.props;
    const getPostText = () => {
      if (postEdges) {
        return postEdges.length > 1
          ? `${postEdges.length} films`
          : `${postEdges.length} film`;
      }
      return null;
    };
    if (postEdges.length > 0) {
      return (
        <span className="author-stats">
          <i className="icon-stats" /> {getPostText()}
        </span>
      );
    } else {
      return null;
    }
  }
}

export default AuthorStats;
