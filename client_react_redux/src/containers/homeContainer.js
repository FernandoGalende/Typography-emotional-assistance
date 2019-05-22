import { connect } from 'react-redux';
import * as actions from '../actions/homeActions';
import { Home } from '../pages/Home';
import { getJoyEmotion } from './../reducers'

const mapStateToProps = (state) => ({
	hasUser: state.home.hasUser,
	userName: state.home.userName,
	watsonResults: state.home.emotionalResults,
	joyEmotion: getJoyEmotion(state.emotions)
});

/* const mapStateToProps = state => ({ ...state,
 }); */

const mapDispatchToProps = (dispatch) => {
	return {
		toggleUser: () => dispatch(actions.toggleUserAction()),
		fetchWatson: data => dispatch(actions.fetchWatson(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);