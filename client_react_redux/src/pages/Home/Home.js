import React, { Component } from 'react';
import './home.scss';

//Components
import Cover from '../../components/Cover/Cover'

export class Home extends Component {
	renderUser() {
		return <small>user</small>;
	}

	render() {
		const user = {
			hasUser: this.props.hasUser,
			userName: this.props.userName
		}

		return (
			<Cover user={ user }/>
		);
	}
}


