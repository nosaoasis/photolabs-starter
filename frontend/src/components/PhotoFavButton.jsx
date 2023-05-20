import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { id, favPhotoList, dispatch, user } = props;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIsFavorited = (id) => {
    dispatch({ type: "PHOTO_LIKE_BTN_CLICK", payload: { id, user } });
    let newFavPhotoList;
    if (favPhotoList.includes(id)) {
      newFavPhotoList = favPhotoList.filter((item) => item != id);
    } else {
      newFavPhotoList = [...favPhotoList, id];
    }
    setIsFavorited(!isFavorited);
    return null;
  };

  return (
    <div className="photo-list--fav-icon" onClick={() => handleIsFavorited(id)}>
      <div className="photo-list--fav-icon-svg">
        {/* Insert React */}
        <FavIcon
          width={22}
          height={30}
          fill={isFavorited ? "red" : ""}
          outlineWidth={1}
          stroke={isFavorited ? "" : "red"}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
