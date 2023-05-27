import React, { useCallback, useEffect, useState } from "react";

import { FavIcon } from "./FavIcon";
import "styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { id, favPhotoList, dispatch, user, photoFavBtnClicked } = props;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIsFavorited = (id) => {
    photoFavBtnClicked(id)
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
