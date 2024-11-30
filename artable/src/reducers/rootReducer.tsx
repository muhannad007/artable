import { Action } from "redux";

const initState = {
  posts: [],
};

const rootReducer = (state: object = initState, action: Action) => {
  return state;
};

export default rootReducer;
