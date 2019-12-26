import React from "react";
import SignUpComp from "./SignUpComp";
import "./SignUp.scss";

function SignUp() {
  return (
    <div>
      <nav></nav>
      {/* Current nav content is blank*/}
      <h2 className="SignUpHeading">회원가입</h2>
      <form></form>
      {/* Current form content is blank */}
      <div className="agreeBox">
        <p>
          <SignUpComp
            ltype="ltype"
            ltext="allAgree"
            termsText="아래 약관에 모두 동의합니다."
          />
        </p>
      </div>
      <div>
        <SignUpComp
          ltype="ltype"
          ltext="agree1"
          termsText="서비스 이용약관 (필수)"
        />
        <SignUpComp
          ltype="ltype"
          ltext="agree2"
          termsText="개인정보 처리 방침 (필수)"
        />
        <SignUpComp
          ltype="ltype"
          ltext="agree3"
          termsText="이벤트 등 프로모션 알림 SMS 수신 (선택)"
        />
        <SignUpComp
          ltype="ltype"
          ltext="agree4"
          termsText="이벤트 등 프로모션 알림 메일 수신 (선택)"
        />
      </div>
    </div>
  );
}

export default SignUp;
