import React from "react";

import "styles/TopicList.scss";
import TopicListItem from "components/TopicListItem";
import FavBadge from "components/FavBadge";

const TopicList = (props) => {
  const { favPhotoList, topics, getTopicPhotos } = props;
  const topicList = topics.map((topic, index) => {
    return (
      <TopicListItem key={index} {...topic} getTopicPhotos={getTopicPhotos} />
    );
  });

  return (
    <>
      <div className="top-nav-bar--topic-list">
        {/* Insert React */}
        {topicList}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <FavBadge isFavPhotoExist={favPhotoList.length > 0 ? true : false} />
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
