import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_START
} from "../actions/story-action";

const initialStatus = {
  data: []
};

export default (state = initialStatus, action) => {
  switch (action.type) {
    case FETCH_START: {
      const data = {
        pending: true,
        stories: [],
        users: []
      };
      const updatedData = state.data.concat(data);
      return {
        ...state,
        data: updatedData
      };
    }

    case FETCH_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }
    case FETCH_SUCCESS: {
      console.log(action.data)
      return {
        ...state,
        data: action.data
      };
    }
    default:
      return state;
  }
};
