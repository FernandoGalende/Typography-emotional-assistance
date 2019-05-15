import React, { Component } from 'react';
import './home.scss';

//Components
import Cover from '../../components/Cover';
import Input from '../../components/Input';

const BASE_URL = process.env.REACT_APP_API_BASEURL;


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
				this.props.emotionalRestuls( results );
		}).catch(error => console.error(error));
	}

	render() {
		const user = {
			hasUser: this.props.hasUser,
			userName: this.props.userName
		}


		return (
			<div>
				<Cover user={ user }/>
				<Input onResult={this._handleResult}/>
			</div>
		);
	}
}


