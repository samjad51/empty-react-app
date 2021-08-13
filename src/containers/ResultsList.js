import { connect } from 'react-redux';
import ResultsList from 'components/ResultsList';

const mapStateToProps = (state) => ({ resultsData: state.resultsData });

export default connect(
    mapStateToProps,
)(ResultsList);
