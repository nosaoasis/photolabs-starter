import React from "react";

import "../styles/TopicList.scss"
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;

  const topicList = topics.map((topic, index) => {
    // const {id, label, link} = topic
    return <TopicListItem key={index} {...topic} />;
  });

  return (
    <>
      <div className="top-nav-bar--topic-list">
        {/* Insert React */}
        {topicList}
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
