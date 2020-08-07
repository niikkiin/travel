import React from 'react';

// import the global styles
import { GlobalStyles } from 'utilities/styles/global.styles';

// routes
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store/store';

// component
import TabBar from 'components/tab-bar/tab-bar.component';
import { PhoneBreakpoint } from 'utilities/responsiveness/device-breakpoints.utility';

function App() {
	return (
		<Provider store={store}>
			<Router basename={process.env.REACT_APP_BASENAME || ''}>
				<PhoneBreakpoint>
					<TabBar />
				</PhoneBreakpoint>
				<GlobalStyles />
				<>
					{routes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={(props) => {
									return (
										<route.layout {...props}>
											<route.component {...props} />
										</route.layout>
									);
								}}
							/>
						);
					})}
				</>
			</Router>
		</Provider>
	);
}

export default App;
