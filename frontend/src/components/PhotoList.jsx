import React from "react";

import "styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem";

const PhotoList = (props) => {
  const { photos } = props;

  const photoList = photos.map((photo) => {
    const { id } = photo;
    return <PhotoListItem key={id} {...photo} />;
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
