import React from 'react'
import './WithMiso.scss'
import WithMisoComp from './WithMisoComp'

function WithMiso() {
    return (
    <div className ="WithMisoStyle">   
        <div className ="maxWidth">
            <div className ="WithMiso">     
                <div className ="textBox">
                    <div className ="H1">
                        미소와 함께 해요
                    </div>
                    <div className ="textMessage">
                        <WithMisoComp text ="더 나은 모두의 일상을 위해"/>
                        <WithMisoComp text ="미소 홈서비스를 함께 만들어갈"/>
                        <WithMisoComp text ="인재를 찾고 있습니다"/>
                    </div>
                    <div>
                        {/* {자세히 보기 button component 자리} */}
                    </div>
                </div>  
                <img alt ="WithMisoIm" className ="WithMisoImg" src = "https://miso.kr/home-service-page/hiring@2x.png"></img>     
            </div> 
        </div>
    </div>
    )
}

export default WithMiso


