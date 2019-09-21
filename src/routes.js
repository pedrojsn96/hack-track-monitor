import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Monitor from './pages/Monitor';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" component={Login} exact />
			<Route path="/monitor/:id" component={Monitor} />
		</BrowserRouter>
	);
}
