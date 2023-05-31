import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, photoFavBtnClicked, showModal, closeModal, setAppData, getTopicPhotos } =
    useApplicationData();

  useEffect(() => {
    const topicsApi = `/api/topics`;
    const photosApi = `/api/photos`;

    Promise.all([axios.get(topicsApi), axios.get(photosApi)]).then((all) => {
      const [topics, photos] = all;
      setAppData(topics.data, photos.data);
    }).catch(err => console.log("An unexpected error occured", err))
  }, []);

  return (
    <>
      <div className="App">
        <HomeRoute
          state={state}
          photoFavBtnClicked={photoFavBtnClicked}
          showModal={showModal}
          getTopicPhotos={getTopicPhotos}
        />
        {state.isModalOpen && (
          <PhotoDetailsModal
            closeModal={closeModal}
            photoDetails={state.modalPhotoDetails}
            photoFavBtnClicked={photoFavBtnClicked}
            favPhotoList={state.favPhotoList}
          />
        )}
      </div>
    </>
  );
};

export default App;
