import {
  DELETE_NEWS_SUCCESS, GET_NEWS_FAIL, ADD_NEWS_SUCCESS, GET_NEWS_SUCCESS, EDIT_NEWS_SUCCESS,
} from '../action';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return { data: action.payload };

    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case DELETE_NEWS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((el) => el.guid !== action.payload),
      };

    case EDIT_NEWS_SUCCESS:
      const newArray1 = state.data.map((element) => {
        if (element.guid === action.payload.guid) {
          return action.payload;
        }
        return element;
      });
      return { ...state, data: newArray1 };

    case GET_NEWS_FAIL:
      console.log('ERROR BUILD FAILD');
      return state;

    default:
      return state;
  }
};
