import React from "react";

function FooterComp(props) {
  return (
    <a href={props.url}>
      <button className="linkPack background white cursor">
        {props.linkName}
      </button>
    </a>
  );
}

export default FooterComp;
