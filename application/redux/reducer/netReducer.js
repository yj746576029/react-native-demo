import * as Types from '../action/actionTypes'

const netState = {
  status: 'online',
}

export function netReducer(state = netState, action) {
  switch (action.type) {
    case Types.ONLINE:
      if (state.status != 'online') {
        return Object.assign({}, state, {
          status: 'online',
        });
      }
      break;
    case Types.OFFLINE:
      if (state.status != 'offline') {
        return Object.assign({}, state, {
          status: 'offline',
        });
      }
      break;
    default:
      return state;
      break;
  }
}