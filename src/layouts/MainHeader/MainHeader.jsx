import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children, cover, color } = this.props;
    console.log
    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
      let style = {}
      if (cover) {
        style.backgroundImage = `url("${cover}")`
      }
      else {
        style.backgroundColor = color
      }
      return style;
    };

    return (
      <div style={color && {backgroundColor: color}}>
        <header className={classes} style={getStyle()}>
          {children}
        </header>
      </div>
    );
  }
}

export default MainHeader;
