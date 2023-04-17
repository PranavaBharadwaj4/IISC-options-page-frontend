import React from 'react';


const SocialLoginCard = ({  leftBtnText, leftBtnClick,  rightBtnText, rightBtnClick }) => {
  return (
    <div className="social-card">
      <div className="left">
        <div className="bubble">
          
          <button onClick={leftBtnClick}>{leftBtnText}</button>
        </div>
      </div>
      <div className="right">
        <div className="bubble">
          
          <button onClick={rightBtnClick}>{rightBtnText}</button>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginCard;
