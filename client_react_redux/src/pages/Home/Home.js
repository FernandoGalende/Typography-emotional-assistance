import React, { Component } from 'react';
import './home.scss';

//Components
import Cover from '../../components/Cover';
import Input from '../../components/Input';

export class Home extends Component {
	constructor() {
		super();
		this._handleResult = this._handleResult.bind(this);
	}

	renderUser() {
		return <small>user</small>;
	}

	_handleResult(results) {
		const data = { info: results }
		this.props.fetchWatson( data );
	}

	render() {
		const user = {
			hasUser: this.props.hasUser,
			userName: this.props.userName
		}


		return (
			<div className='home'>
				<Cover user={ user }/>
				<Input onResult={this._handleResult}/>
			</div>
		);
	}
}


