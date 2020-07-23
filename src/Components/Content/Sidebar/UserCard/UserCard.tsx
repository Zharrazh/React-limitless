import "./UserCard.scss";
import React from "react";
import avatar from "../../../../assets/images/ava1.jpg";
import "./UserCard.scss";

export const UserCard = () => {
  return (
    <div className="userCard">
      <div className="userCard__leftSide">
        <img src={avatar} alt="avatar" />
        <div className="userCard__leftSide__textInfo">
          <div className="userCard__leftSide__textInfo__fullName">
            <span>Victoria Baker</span>
          </div>
          <div className="userCard__leftSide__textInfo__location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Santa Ana, CA</span>
          </div>
        </div>
      </div>
      <div className="userCard_settingsBtn">
      <i className="fas fa-cog fa-lg"></i>
      </div>
    </div>

  );
};
