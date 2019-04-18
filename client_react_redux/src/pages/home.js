import React, { Component } from 'react';

//Components

export class Home extends Component {

	renderUser(){
	return <small> user</small>
	}

	render() {
		const { hasUser } = this.props
		console.log(hasUser)
		return (
			<div>
				<p>Hi! I am <strong>aurelio</strong>, your typography assistant</p>
				<strong>{hasUser}</strong>
			</div>
		);
	}
};
