import * as Types from '../action/actionTypes'

const homeState = {
    status: false,
    data: {},
    message:'',
}

export function homeReducer(state = homeState, action) {
    switch (action.type) {
        case Types.HOME_SUCCESS:
            return Object.assign({}, state, {
                status: 'success',
                data: action.data,
                message:'',
            });
        case Types.HOME_FAILED:
            return Object.assign({}, state, {
                status: 'fail',
                message: action.message,
            });    
        default:
            return state;
    }
}