export const reducer = (state, action) => {
  console.log("action value is", action);
  const { id, user } = action.payload;
  if (action.type === "PHOTO_LIKE_BTN_CLICK") {
    if (state.favPhotoList.includes(id)) {
      const uodateFavPhotoList = state.favPhotoList.filter(
        (item) => item != id
      );
      state = { ...state, favPhotoList: uodateFavPhotoList, user };
    } else {
      state = { ...state, favPhotoList: [...state.favPhotoList, id], user };
    }
    return state;
  }
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
};
