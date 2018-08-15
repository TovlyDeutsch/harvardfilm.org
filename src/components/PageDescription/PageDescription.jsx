import React from "react";
import "./PageDescription.css";

class PageDescription extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h1 className="page-description">{text}</h1>;
    }
    return null;
  }
}

export default PageDescription;
