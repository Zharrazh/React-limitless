import "./GitUpdatesWindow.scss";
import React from "react";
import { CommonContainer } from "../../../../utils/Components/CommonContainer";

export const GitUpdatesWindow = () => {
  return (
    <div className="gitUpdatesWindow">
      <CommonContainer withPadding={false}>
        <div className="gitUpdatesWindow__inner">
          <div className="gitUpdatesWindow__inner__header">
            <div className="gitUpdatesWindow__inner__header__title">
              Git updates
            </div>
            <div className="gitUpdatesWindow__inner__header__control">
              <i className="fas fa-sync-alt"></i>
            </div>
          </div>
          <div className="gitUpdatesWindow__inner__content">
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
              <p>Лень делать айтем поэтому просто напихал тегов p</p>
          </div>
          <div className="gitUpdatesWindow__inner__footer">
            <CommonContainer withPadding={false}>
              <div className="gitUpdatesWindow__inner__footer__inner">
                <span>All updates</span>
                <span>
                  <i className="far fa-circle fa-lg"></i>&nbsp;
                  <i className="fas fa-bug fa-lg"></i>
                </span>
              </div>
            </CommonContainer>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};
