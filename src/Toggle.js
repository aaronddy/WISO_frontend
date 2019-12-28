import React, { Component } from 'react'

class Toggle extends React.Component {
    constructor() {
        super();
        this.state = {
            on: false,
            text: "initial text",
        }
    }


    toggle =(txt) => {
        console.log('the buttons was clicked' + txt)
        this.setState({
            on: !this.state.on,
            //give me the value of state on, whith is false, and new_on is the opposite of this. coule be true.
            text: txt,
        })
    }
    render() {
        return (
            <div>
                {this.state.text}
                {this.state.on && (
                    <h1>Toggle Me</h1>
                    //div 안에 {this.state.on} 이 값이 true이면 &&이후의 ()에 있는 것을 실행하겠습니다. 라는 내장 함수이다. 
                )}
                <button onClick={ (e) => {this.toggle("hello")}}>show/hide</button>
            </div>
        )
    }
}

export default Toggle;