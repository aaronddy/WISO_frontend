import React from "react";
import "./SignUp.scss";

function SignUpComp(props) {
  return (
    <div>
      <ul>
        <li>
          <input className="checkBoxColor" type="checkbox" />
          <label className={props.ltype} for={props.lText}>
            {props.termsText}
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SignUpComp;
