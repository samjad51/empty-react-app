import axios from 'axios';
import {
    CLEAR_SEARCH_RESULTS, SEARCH_RESULTS_SUCCESS,
} from 'constants/actionTypes';
import {
    LOADING,
    SEARCH_API_ROUTE,
} from 'constants/index';

let cancel;
const {
    CancelToken,
} = axios;

export function getSearchResultsAction(query) {
    return (dispatch) => {
        if (cancel !== undefined) {
            cancel();
        }

        dispatch({ type: LOADING });

        return axios({
            method: 'GET',
            url: `${SEARCH_API_ROUTE}?q=${query}`,
            cancelToken: new CancelToken((c) => { cancel = c; }),
        }).then((response) => {
            const {
                data,
            } = response;
            // eslint-disable-next-line no-console
            console.log('data: ', data);

            dispatch({ type: SEARCH_RESULTS_SUCCESS, payload: data });
        }).catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err.message);
        });
    };
}

export const clearSearchResultsAction = () => (dispatch) => {
    dispatch({ type: CLEAR_SEARCH_RESULTS });
};
