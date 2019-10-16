import StoryService from "../services/story-service";
export const FETCH_ERROR = "@fetch/error";
export const FETCH_SUCCESS = "@fetch/success";
export const FETCH_START = "@fetch/start";
export const FETCH_USER = "@fetch/user";


const fetchError = error => ({
  type: FETCH_ERROR,
  error
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  data
});

const fetchUser = data => ({
  type: FETCH_USER,
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

const handleUserResult = async (dispatch, request) => {
  try {
    const items = await request;
    dispatch(fetchUser(items));
  } catch (err) {
    console.log(err)
    dispatch(fetchError(err));
  }
};

const updateStatus = dispatch => {
  const storyService = new StoryService();
  const bestStories = storyService.getStories();

  handleResult(dispatch, bestStories);
};

const updateUser = (username, dispatch) => {
  const storyService = new StoryService();
  const user = storyService.getUser(username);

  handleUserResult(dispatch, user);
};

export const fetchStatuses = username => async dispatch => {
  if (username) {
    updateUser(username, dispatch);
  } else {
    updateStatus(dispatch);
  }
};

export default fetchStatuses;
