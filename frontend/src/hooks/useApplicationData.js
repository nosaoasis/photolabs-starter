import { useReducer } from "react";
import topics from "mocks/topics";
import mockPhotos from "mocks/photos";

import reducer, {
  PHOTO_LIKE_BTN_CLICK,
  SHOW_MODAL,
  CLOSE_MODAL
} from "reducers/photoReducer";

export default function useApplicationData() {
  const defaultState = {
    isModalOpen: false,
    modalPhotoDetails: null,
    topics: topics,
    photos: mockPhotos,
    favPhotoList: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const photoFavBtnClicked = (id) => {
    dispatch({type: PHOTO_LIKE_BTN_CLICK, payload: id })
  }

  const showModal = (id) => {
    dispatch({type: SHOW_MODAL, payload: id })
  }

  const closeModal = () => {
    dispatch({type: CLOSE_MODAL})
  }


  return {
    state,
    photoFavBtnClicked, 
    showModal,
    closeModal
  }
};
