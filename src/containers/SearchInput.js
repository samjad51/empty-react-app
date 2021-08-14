import { connect } from 'react-redux';
import {
    getSearchResultsAction, clearSearchResultsAction,
} from 'actions/searchAction';

import SearchInput from 'components/SearchInput';

const mapStateToProps = (state) => ({ searchResults: state.searchResults });

const mapDispatchToProps = (dispatch) => ({
    getSearchResultsAction: (q) => dispatch(getSearchResultsAction(q)),
    clearSearchResults: () => dispatch(clearSearchResultsAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchInput);
