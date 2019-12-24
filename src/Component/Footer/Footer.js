import React from 'react'
import FooterComp from './FooterComp'
import './Footer.css'


function Footer() {
    
    return (
        <div className = "Footer">
            <div className= "backgroundColor">
                <div className =" layout">
                    <div className ="margin">
                        <div className = "flexDirRow relative marginBm1">
                            <div className = "flexStart alignCenter">
                                <a href ="#"><button className ="top background white cursor">miso</button></a>
                                <div className = "linkPack">
                                    <FooterComp url = "https://blog.naver.com/misomktblog" linkName = "블로그"/>
                                    <FooterComp url = "https://s3.ap-northeast-2.amazonaws.com/miso-web-assets/terms/tos.html" linkName = "이용약관"/>
                                    <FooterComp url = "https://s3.ap-northeast-2.amazonaws.com/miso-web-assets/terms/privacy.html" linkName = "개인정보"/>
                                </div>
                            </div> 
                            <div className = "arrow">
                                <a href ="#"><button className ="background border cursor"><img className ="topArrow" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16gBuuXe8mxsQET5S5IKhU8TgkaOaXEmed1j7lhcnXVGDYfdHUw&s"></img></button></a>
                            </div>
                        </div>
                        <div className ="marginBm2 ref">@ 2019. 유한회사 미소. Miso, Inc. All Rights Reserved.</div>
                        <div className ="ref">사업자등록번호 : 291-87-00271 | 인허가번호 : 2016-3220163-14-5-00019 | 대표이사 : CHING VICTOR COLUMBIA R | 대표전화 : 1577-8808 | 주소 : 서울특별시 논현로 86길 32, 1층</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer
