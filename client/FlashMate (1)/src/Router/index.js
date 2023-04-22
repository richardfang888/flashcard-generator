import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Desktop1 from '../Components/Desktop1';
import Desktop1_1 from '../Components/Desktop1_1';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/desktop1"><Desktop1 /></Route>
				<Route exact path="/desktop1_1"><Desktop1_1 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;