import { connect } from 'react-redux';
import * as actions from '../actions/homeActions';
import { Home } from '../pages/Home'

const mapStateToProps = (state, ownProps) => ({
	hasUser: state.home.hasUser,
	userName: state.home.userName
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		toggleUser: () => dispatch(actions.toggleUserAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);