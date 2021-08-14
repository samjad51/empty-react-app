import {
    CLEAR_SEARCH_RESULTS, SEARCH_RESULTS_SUCCESS,
} from 'constants/actionTypes';

function rootReducer(state, action) {
    switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
        return { ...state, searchResults: action.payload };
    case CLEAR_SEARCH_RESULTS:
        return { ...state, searchResults: [] };
    default:
        return state;
    }
}

export default rootReducer;
