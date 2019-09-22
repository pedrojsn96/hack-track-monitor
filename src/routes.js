import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Monitor from './pages/Monitor';
import Home from './pages/Home';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/login" component={Login} />
			<Route path="/monitor/:id" component={Monitor} />
		</BrowserRouter>
	);
}
