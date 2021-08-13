import { connect } from 'react-redux';
import getSearchResultsAction from 'actions/searchAction';

import SearchInput from 'components/SearchInput';

const mapStateToProps = (state) => ({ query: state.query });

const mapDispatchToProps = (dispatch) => ({ getSearchResultsAction: (query) => dispatch(getSearchResultsAction(query)) });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchInput);
