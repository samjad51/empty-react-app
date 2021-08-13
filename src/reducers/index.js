import { SEARCH_RESULTS_SUCCESS } from 'constants/actionTypes';

function rootReducer(state, action) {
    switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
        return {
            ...state,
            resultsData: action.payload,
        };
    default:
        return state;
    }
}

export default rootReducer;
