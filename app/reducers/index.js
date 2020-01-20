import { combineReducers } from 'redux';

// FIXME: remove
const connectedUsersReducer = (state={}, action) => {
  switch (action.type) {
    case 'CHAT_UPDATE_CONNECTED_USERS':
      return {users: action.obj};
    default:
      return state;
  }
}

const globalReducer = combineReducers({
  connectedUsersReducer: connectedUsersReducer,
});

export default globalReducer;

