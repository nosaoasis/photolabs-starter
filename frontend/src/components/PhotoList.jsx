import React from "react";

import "styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem";
import photoData from "mocks/photos";

const PhotoList = (props) => {
  const photoList = photoData.map((photo) => {
    const { id, user, urls } = photo;
    return <PhotoListItem key={id} user={user} urls={urls} />;
  });

  return (
    <>
      {/* Insert React */}
      <ul className="photo-list">{photoList}</ul>
    </>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
