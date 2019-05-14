import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import  Home  from './containers/home/home'

//Styles
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
