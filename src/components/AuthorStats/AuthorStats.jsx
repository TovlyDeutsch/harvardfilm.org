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
    return (
      <span className="author-stats">
        <i className="icon-stats" /> {getPostText()}
      </span>
    );
  }
}

export default AuthorStats;
