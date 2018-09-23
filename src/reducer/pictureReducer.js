import axios from "axios";

const initState = {
  allPics: [],
  singlePic: {}
};

//actions
const GET_PICTURES = "GET_PICTURE";
const GET_SINGLE_PICTURE = "GET_SINGLE_PICTURE";

//action creators
const getPictures = pictures => ({ type: GET_PICTURES, pictures });
const getSinglePicture = pictureId => ({
  type: GET_SINGLE_PICTURE,
  payload: pictureId
});

//thunk creator
export const fetchSingleBook = pictureId => {
  try {
    return async dispatch => {
      const { data } = await axios.get("/api/pictures/" + pictureId);
      const action = getSinglePicture(data);
      dispatch(action);
    };
  } catch (error) {
    console.error(error);
  }
};

const pictureReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SINGLE_PICTURE:
      return {
        ...state,
        singlePic: action.payload
      };
    default:
      return state;
  }
};

export default pictureReducer;
