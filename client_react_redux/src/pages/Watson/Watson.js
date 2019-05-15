import React, { Component } from 'react';

const BASE_URL = process.env.REACT_APP_API_BASEURL;

export class Watson extends Component {
  _handleChange = (event) => {
		this.setState({watsonInput: event.target.value})
	};

	_handleSubmit = (event) => {
    event.preventDefault();

    const data = { info: this.state.watsonInput }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
    };

    fetch(`${BASE_URL}/watson`, options)
      .then((res) => res.json())
      .then((results) => {
			console.log('results--->', results);
			//this.props.onResults( results.data )
		}).catch(error => console.log(error));
	};

	render() {
		return (
			<form onSubmit={this._handleSubmit} id='watson-form'>
				<div className='field has-addons'>
					<div className='control'>
						<input className='input' onChange={this._handleChange} type='text' />
					</div>
					<div className='control'>
						<button id='search-button' className='button is-info'>
							Send
						</button>
					</div>
				</div>
			</form>
		);
	}
}
