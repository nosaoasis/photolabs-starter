import React, { useState, useReducer } from "react";

import "styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    state,
    photoFavBtnClicked,
    showModal,
  } = props;

  return (
    <>
      <div className="home-route">
        {/* Insert React */}
        <TopNavigation
          favPhotoList={state.favPhotoList}
          topics={state.topics}
        />
        <PhotoList
          mockPhotos={state.photos}
          showModal={showModal}
          favPhotoList={state.favPhotoList}
          photoFavBtnClicked={photoFavBtnClicked}
        />
      </div>
    </>
  );
};

export default HomeRoute;
