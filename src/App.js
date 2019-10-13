import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/story-reducer";
import ViewContainer from './containers/view-container';
import ErrorBoundary from './components/error';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducers, composeEnhancer(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBoundary>
        <ViewContainer />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
