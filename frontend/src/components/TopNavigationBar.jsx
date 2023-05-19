import React from "react";

import "styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";

const TopNavigation = () => {
  return (
    <>
      <div className="top-nav-bar">
        <span className="top-nav-bar--logo">PhotoLabs</span>
        <TopicList />
      </div>
    </>
  );
};

export default TopNavigation;
