import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './Home';
import About from './About';
import Images from './Images';
import Contact from './Contact';

import {
	BrowserRouter as Router,
	Route, Switch
} from 'react-router-dom'

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/images" component={Images} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</App>
	</Router>
	, document.getElementById('root'));