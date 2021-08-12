import axios from 'axios';
import {
    LOADING,
    SEARCH_API_ROUTE,
} from 'constants/index';

export default function getSearchResultsAction(query) {
    return (dispatch) => {
        dispatch({ type: LOADING });

        return axios({
            method: 'GET',
            url: `${SEARCH_API_ROUTE}?q=${query}`,
        }).then((response) => {
            const {
                data,
            } = response;
            // eslint-disable-next-line no-console
            console.log('data: ', data);
        }).catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err.message);
        });
    };
}
