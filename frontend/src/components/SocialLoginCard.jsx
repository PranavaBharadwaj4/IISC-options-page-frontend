import React from 'react';


const SocialLoginCard = ({  leftBtnText, leftBtnClick,  rightBtnText, rightBtnClick }) => {
  return (
    <div className="social-card">
      <div >
        {/* <div className="bubble"> */}
          
          <button className="left" onClick={leftBtnClick}><span>{leftBtnText}</span></button>
        {/* </div> */}
      </div>
      <div >
        {/* <div className="bubble"> */}
          
          <button className="right" onClick={rightBtnClick}><span>{rightBtnText}</span></button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SocialLoginCard;
