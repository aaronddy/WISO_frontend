import React, { Component } from "react";
import expandArrow from "../../Images/expand_arrow.png";

class ClientFaq extends Component {
  render() {
    let answerBorderClasses;
    if (this.props.openAnswer) {
      answerBorderClasses = "faqAnswerBorderClosed";
    } else {
      answerBorderClasses = "faqAnswerBorder";
    }

    console.log(this.props.openAnswer);
    return (
      <div className="clientServiceFnq">
        <div className="faqSectionTitle">서비스 이용</div>
        <div>
          <div className="faqArticleBorder">
            <span>Q. 이사 종류는 어떤 게 있나요?</span>
            <img
              src={expandArrow}
              alt="arrowIcon"
              className="clickArrow"
              onClick={this.props.openAnswer}
            />
          </div>
          <div className={answerBorderClasses}>
            <div className="faqAnswer">안 알랴쥼</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientFaq;
