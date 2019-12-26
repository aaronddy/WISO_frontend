import React, { Component } from 'react'

class SelectOption extends Component {
    // id가 move_house일 때, 핸들러에서 color, border을 바꾸는 형식으로 해야겠다. 
   
    

    render() {
        return (
                <div onClick={this.props.handler} className ="service center" for ={this.props.category}>
                    <button className ={this.props.change}>{this.props.service}</button>
                </div>
        )
    }
}


export default SelectOption;