import React, { Component } from "react";
import FaqBox from "./FaqBox";
// import expandArrow from "../../Images/expand_arrow.png";

class ClientFaq extends Component {
  // let openAnswerClasses;
  // let aaa;
  // for (let i = 0; i < 26; i++) {
  //   if (this.props.indexValue === this.props.value.articlesOne.length - i) {
  //     aaa = "faqAnswerBorder";
  //     console.log(openAnswerClasses);
  //   } else {
  //     openAnswerClasses = "faqAnswerBorderClosed";
  //   }
  // }
  // console.log(this.props.value.articlesOne.length);
  // console.log(this.props.indexValue);

  state = {
    current: null,
    answerOpened: false
  };

  componentDidMount = () => {
    console.log(this.props.value.articlesOne);
  };

  clickToOpenAnswer = () => {
    this.setState({
      answerOpened: !this.state.answerOpened
    });
    console.log(this.state.answerOpened);
  };

  render() {
    const articles = this.props.value.articlesOne;
    return (
      <div className="clientServiceFnq">
        <div className="faqSectionTitle">
          {/* {this.props.value.section.titleNameOne} */}
        </div>
        {articles.map((curr, index) => {
          return (
            <FaqBox
              article={curr}
              key={index}
              dataIndex={index}
              open={index === this.state.current && !this.state.answerOpened}
              openAnswer={this.clickToOpenAnswer}
            />
          );
        })}
      </div>
    );
  }
}

export default ClientFaq;
