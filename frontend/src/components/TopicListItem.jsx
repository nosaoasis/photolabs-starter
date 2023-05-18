import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { id, label, link } = props;
  return (
    <>
      <div className="topic-list--item">
        {/* Insert React */}
        <span>{label}</span>
      </div>
    </>
  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: "Nature",
  link: "link placeholder",
};
export default TopicListItem;
