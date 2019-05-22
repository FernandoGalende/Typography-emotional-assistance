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
		return <small>{this.props.userName}</small>;
	}

	_handleResult(results) {
		const data = { info: results }
		this.props.fetchWatson( data );
	}

	componentDidUpdate () {
		console.log('component', this.props.joyEmotion)
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
				{this.renderUser()}
			</div>
		);
	}
}


