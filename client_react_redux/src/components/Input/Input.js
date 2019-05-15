import React, { Component } from 'react';

export default class Input extends Component {
	constructor() {
		super();
		this._handleChange = this._handleChange.bind(this);
		this._submitHandler = this._submitHandler.bind(this);
		this.state = {
			inputField: ''
		};
	}

	_handleChange = (event) => {
		this.setState({ inputField: event.target.value });
	};

	_submitHandler = (event) => {
		event.preventDefault();
		this.props.onResult(this.state.inputField)
		this.setState({
      inputField: ''
    });
	}

	render() {
		return (
			<form onSubmit={ this._submitHandler } id='watson-form'>
				<div className='field has-addons'>
					<div className='control'>
						<input className='input'
									 onChange={this._handleChange}
									 type='text' />
						<input type='submit' />
					</div>
				</div>
			</form>
		);
	};
};
