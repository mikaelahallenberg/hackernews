import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_USER,
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
        user: []
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
      return {
        ...state,
        data: action.data
      };
    }
    case FETCH_USER: {
      const oldStories = state.data.stories ? state.data.stories.slice() : []
      return {
        ...state,
        data: {
          ...state.data,
          stories: oldStories,
          user: action.data
        }
      };
    }
    default:
      return state;
  }
};
