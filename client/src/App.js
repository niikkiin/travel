import React from 'react';

// import the global styles
import { GlobalStyles } from 'utilities/styles/global.styles';

// routes
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store/store';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
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