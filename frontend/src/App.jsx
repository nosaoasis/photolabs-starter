import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import mockPhotos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <>
      <div className="App">
        <HomeRoute topics={topics} mockPhotos={mockPhotos} />
      </div>
    </>
  );
};

export default App;
