import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import './styles.scss';

//Components
import Cover from './components/cover'

export class Home extends Component {
	renderUser() {
		return <small> user</small>;
	}

	render() {
		const { hasUser } = this.props;

		return (
			<Cover hasUser={hasUser}/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	hasUser: state.home.hasUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		toggleUser: () => dispatch(actions.toggleUserAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
