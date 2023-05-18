import React from "react";

import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, user, urls} = props;
  return (
    <>
      <li className="photo-list--item">
        <PhotoFavButton />
        <img src={urls.full} className="photo-list--image" />
      </li>
    </>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
