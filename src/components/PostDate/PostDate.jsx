import React from "react";
import moment from "moment";
import "./PostDate.css";

moment.updateLocale('en', {
  ordinal : function (number, token) {
      var b = number % 10;
      var output = (~~ (number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
      return number + '<sup>' + output + '</sup>';
  }
});

class PostDate extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <time
        className="post-date"
        dateTime={moment(new Date(date)).format("YYYY-MM-DD")}
        dangerouslySetInnerHTML={{__html: (moment(new Date(date)).format("MMMM Do YYYY"))}}
      >
      </time>
    );
  }
}

export default PostDate;
