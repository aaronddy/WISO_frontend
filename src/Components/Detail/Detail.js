import React from "react";
import "./Detail.scss";
import { useHistory } from "react-router-dom";

const Detail = ({ link }) => {
  const history = useHistory();
  const handleLink = path => ev => {
    history.push(path);
  };
  return (
    <button className="dailyBtn" onClick={handleLink(link)}>
      <div className="dailyBtnComment">자세히 보기</div>
      <img
        className="dailyArrow"
        src="https://miso.kr/common/brand.svg"
        alt="화살표 이미지"
      />
    </button>
  );
};

export default Detail;
