import axios from 'axios';
import { SEARCH_API_ROUTE } from 'constants/index';
import {
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_ERROR,
} from 'constants/actionTypes';

export default function getSearchResultsAction(searchText = '') {
    let ajaxRequest = null;

    return (dispatch) => {
        // cancel in process request
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        // set new cancel token
        ajaxRequest = axios.CancelToken.source();

        const query = `${searchText}`.trim();

        // no search dispatch empty result to clear resultList
        if (!query.length) {
            return dispatch({
                type: SEARCH_RESULTS_SUCCESS,
                payload: [],
            });
        }

        // no search if less than 2 characters
        if (query.length < 2) {
            return undefined;
        }

        // do search
        return axios({
            method: 'GET',
            url: `${SEARCH_API_ROUTE}?q=${query}`,
            cancelToken: ajaxRequest.token,
        }).then((response) => {
            const {
                data,
            } = response;

            dispatch({
                type: SEARCH_RESULTS_SUCCESS,
                payload: data,
            });
        }).catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err.message);

            dispatch({
                type: SEARCH_RESULTS_ERROR,
                payload: err,
            });
        });
    };
}
