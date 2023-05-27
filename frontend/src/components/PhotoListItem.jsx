import React, { useMemo } from "react";

import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, user, urls, favPhotoList, photoFavBtnClicked, showModal } = props;

  const photoIsFavorited = useMemo(() => {
    favPhotoList.includes(id)
  }, [favPhotoList, id]);

  return (
    <>
      <li className="photo-list--item">
        <PhotoFavButton
          id={id}
          user={user}
          favPhotoList={favPhotoList}
          photoFavBtnClicked={photoFavBtnClicked}
          photoIsFavorited={photoIsFavorited}
        />
        <img
          src={urls.regular}
          className={"photo-list--image"}
          onClick={() => showModal(id)}
        />
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
