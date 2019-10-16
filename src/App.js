import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/story-reducer";
import ViewContainer from "./containers/view-container";
import UserItem from './components/user-item';
import ErrorBoundary from "./components/error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ErrorBoundary>
          <Switch>
          <Route exact path="/" component={ViewContainer} />
          <Route path="/:id" component={UserItem} />
          </Switch>
          </ErrorBoundary>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
