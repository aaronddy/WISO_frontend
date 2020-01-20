import React, { Component } from "react";
import expandArrow from "../../Images/expand_arrow.png";

class FaqBox extends Component {
  constructor() {
    super();
    this.state = {
      opened: false
    };
    this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({
      opened: !this.state.opened
    });
    console.log(this.state.opened);
  };
  render() {
    return (
      <div>
        <div className="faqArticleBorder" onClick={this.clickHandler}>
          <span>{this.props.article.question}</span>
          <img src={expandArrow} alt="arrowIcon" className="clickArrow" />
        </div>
        <div
          className={
            this.state.opened ? "faqAnswerBorder" : "faqAnswerBorderClosed"
          }
        >
          <div className="faqAnswer">{this.props.article.answer}</div>
        </div>
      </div>
    );
  }
}

export default FaqBox;
