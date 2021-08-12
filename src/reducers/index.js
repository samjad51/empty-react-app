import { SEARCH_RESULTS_SUCCESS } from 'constants/actionTypes';

function rootReducer(state, action) {
    switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
    default:
        return state;
    }
}

export default rootReducer;
