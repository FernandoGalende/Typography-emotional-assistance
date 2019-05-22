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
		fetchWatson: data => dispatch(actions.fetchWatson(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);