import React, { Component } from "react";
import expandArrow from "../../Images/expand_arrow.png";

// updateCurrentIndex = () => {
//   this.setState({ current: index });
// };
 
class FaqBox extends Component {
  render() {
    // let answerBorderClasses;
    // if (!this.props.stateValue) {
    //   answerBorderClasses = "faqAnswerBorderClosed";
    // } else {
    //   answerBorderClasses = "faqAnswerBorder";
    // }
    //console.log("FaqBox: ", this.props.article);

    // console.log(this.props.dataIndex);
    return (
      <div>
        <div className="faqArticleBorder">
          <span>{this.props.article.question}</span>
          <img
            src={expandArrow}
            alt="arrowIcon"
            className="clickArrow"
            onClick={this.props.openAnswer}
          />
        </div>
        <div
          className={
            this.props.open ? "faqAnswerBorder" : "faqAnswerBorderClosed"
          }
        >
          <div className="faqAnswer">{this.props.article.answer}</div>
        </div>
      </div>
    );
  }
}

export default FaqBox;
