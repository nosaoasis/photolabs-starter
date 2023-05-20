import React from "react";

import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, user, urls, favPhotoList, dispatch, photoModalClick } = props;
  return (
    <>
      <li className="photo-list--item">
        <PhotoFavButton
          id={id}
          user={user}
          favPhotoList={favPhotoList}
          dispatch={dispatch}
        />
        <img src={urls.full} className="photo-list--image" onClick={photoModalClick} />
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
