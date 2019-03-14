import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// Components
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';
import Error404 from './components/Error404';
// Styles
import './styles/app.scss'
// ##############################################################

// Redux store
const store = createStore(rootReducer);
store.subscribe(() => console.log('store:', store.getState()));

// ReactDOM.render
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

