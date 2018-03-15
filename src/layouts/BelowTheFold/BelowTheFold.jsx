import React from "react";
import "./BelowTheFold.css";

class BelowTheFold extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <div className="below_the_fold">
            {children}
        </div>
    );
  }
}

export default BelowTheFold;
