import React from "react";

import "styles/TopicList.scss";
import TopicListItem from "components/TopicListItem";
import topicLists from "mocks/topics";
import FavBadge from "components/FavBadge";

const TopicList = (props) => {
  const topicList = topicLists.map((topic, index) => {
    return <TopicListItem key={index} {...topic} />;
  });

  return (
    <>
      <div className="top-nav-bar--topic-list">
        {/* Insert React */}
        {topicList}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <FavBadge />
      </div>
    </>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: "Nature",
      link: "link placeholder",
    },
    {
      id: 2,
      label: "Food",
      link: "link placeholder",
    },
    {
      id: 3,
      label: "People",
      link: "link placeholder",
    },
  ],
};
export default TopicList;
