import React, { Component } from "react";

class ClientFaq extends Component {
  state = {
    currentIdx: 3,
    answerOpened: false
  };

  componentDidMount = () => {
    console.log(this.props.value.articlesOne);
  };

  clickToOpenAnswer = () => {
    this.setState({
      currentIdx: !this.state.answerOpened
    });
    // console.log(this.state.answerOpened);
  };

  render() {
    return (
      <div className="clientServiceFnq">
        <div className="faqSectionTitle">
          {/* {this.props.value.sections.map((curr, index) => {
            return;
          })} */}
        </div>

        {/* {this.props.value.map((curr, index) => {
          return (
            <FaqBox
              article={curr}
              key={index}
              dataIndex={index}
              open={index === this.state.current && !this.state.answerOpened}
              openAnswer={this.clickToOpenAnswer}
            />
          );
        })} */}
      </div>
    );
  }
}

export default ClientFaq;
