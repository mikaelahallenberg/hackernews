import StoryService from "../services/story-service";

export const FETCH_ERROR = "@fetch/error";
export const FETCH_SUCCESS = "@fetch/success";
export const FETCH_START = "@fetch/start";

// const fetchStart = provider => ({
//   type: FETCH_START,
//   provider: provider
// });

const fetchError = error => ({
  type: FETCH_ERROR,
  error
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  data
});

const handleResult = async (dispatch, request) => {
  try {
    const items = await request;

    dispatch(fetchSuccess(items));
  } catch (err) {
    dispatch(fetchError(err));
  }
};

const updateStatus = (dispatch) => {
  const storyService = new StoryService();
  const bestStories = storyService.getBestStories();
  handleResult(dispatch, bestStories);
}

export const fetchStatuses = () => async dispatch => {
  updateStatus(dispatch);
};

export default fetchStatuses;
