import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import TopicListItem from "./components/TopicListItem";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photoArray = [...Array(3)].map((photo) => (
  //   <PhotoListItem key={new Date().toLocaleString()} />
  // ));

  // const topicArray = [...Array(3)].map((topic) => (
  //   <TopicListItem key={new Date().toLocaleString()} />
  // ));

  return (
    <div className="App">
      {/* {topicArray} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
