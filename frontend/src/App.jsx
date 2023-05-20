import React, {useState} from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "mocks/topics";
import mockPhotos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showPhotoModal, setShowPhotoModal] = useState(false)

  const handlePhotoClick = () => {
    setShowPhotoModal(!showPhotoModal)
  }

  return (
    <>
      <div className="App">
        <HomeRoute topics={topics} mockPhotos={mockPhotos} photoClicked={handlePhotoClick} />
        {showPhotoModal && <PhotoDetailsModal photoClicked={handlePhotoClick} />}
      </div>
    </>
  );
};

export default App;
