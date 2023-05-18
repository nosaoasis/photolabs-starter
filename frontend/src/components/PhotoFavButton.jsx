import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIsFavorited = () => setIsFavorited(!isFavorited);

  return (
    <div className="photo-list--fav-icon" onClick={handleIsFavorited}>
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
