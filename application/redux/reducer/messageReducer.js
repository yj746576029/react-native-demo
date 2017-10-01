import * as Types from '../action/actionTypes'

const msgState = {
    count: 0,
}

export function messageReducer(state = msgState, action) {
    switch (action.type) {
        case 'PLUS':
            return Object.assign({}, state, {
                count: state.count*1+1,
            });
        default:
            return state;
    }
}