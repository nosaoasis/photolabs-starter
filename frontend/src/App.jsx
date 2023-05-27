import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, photoFavBtnClicked, showModal, closeModal } = useApplicationData();

  return (
    <>
      <div className="App">
        <HomeRoute
          state={state}
          photoFavBtnClicked={photoFavBtnClicked}
          showModal={showModal}
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