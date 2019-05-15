import { connect } from 'react-redux';
import * as actions from '../actions/homeActions';
import { Home } from '../pages/Home';

const mapStateToProps = (state, ownProps) => ({
	hasUser: state.home.hasUser,
	userName: state.home.userName,
	watsonResults: state.home.emotionalResults
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		toggleUser: () => dispatch(actions.toggleUserAction()),
		emotionalRestuls: (results) => dispatch(actions.updateEmotionalResults(results))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);