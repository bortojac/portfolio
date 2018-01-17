import {
    GET_AUTH,
    AUTH_RECEIVED
} from '../actions/actions.js';

export function token (
    state = {
        tokenGranted: false
    },
    action
  ) {
    switch (action.type) {
        /*case GET_AUTH:
            return Object.assign({}, state, {
                tokenGranted: false
            })*/
        case AUTH_RECEIVED:
            return Object.assign({}, state, {
                tokenGranted: true
            })
        default:
            return state
    }
  }




