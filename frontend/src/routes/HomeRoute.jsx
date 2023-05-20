import React, { useState, useReducer } from "react";

import "styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { reducer } from "reducers/photoReducer";

const HomeRoute = (props) => {
  const { topics, mockPhotos } = props;

  const defaultState = {
    favPhotoList: [],
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <div className="home-route">
        {/* Insert React */}
        <TopNavigation favPhotoList={state.favPhotoList} topics={topics} />
        <PhotoList
          mockPhotos={mockPhotos}
          favPhotoList={state.favPhotoList}
          dispatch={dispatch}
        />
      </div>
    </>
  );
};

export default HomeRoute;
