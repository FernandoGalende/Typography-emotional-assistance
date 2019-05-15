import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import  HomeContainer  from './containers/homeContainer'
import  WatsonContainer  from './containers/watsonContainer'

//Styles
import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={HomeContainer} />
					<Route exact path='/watson' component={WatsonContainer} />
				</Switch>
			</div>
		);
	}
}
