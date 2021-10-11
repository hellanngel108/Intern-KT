import {
  FETCH_USER,
  UPDATE_USER,
  ADD_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST,
  UNFRIEND,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from "../actionTypes";

const userReducer = (user = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    case ADD_FRIEND_REQUEST:
      return action.payload;
    case REMOVE_FRIEND_REQUEST:
      return action.payload;
    case UNFRIEND:
      return action.payload;
    case FOLLOW_USER:
      return action.payload;
    case UNFOLLOW_USER:
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
