import React from "react";

import "styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem";

const PhotoList = (props) => {
  const { favPhotoList, dispatch, mockPhotos } = props;
  const photoList = mockPhotos.map((photo) => {
    const { id, user, urls } = photo;
    return (
      <PhotoListItem
        key={id}
        id={id}
        user={user}
        urls={urls}
        favPhotoList={favPhotoList}
        dispatch={dispatch}
      />
    );
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
