import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Components
import rootReducer from './store/reducers/rootReducers'
import App from './container/App'
import FavoriteRecipeList from './components/Recipe/FavoriteRecipeList'
import Error404 from './components/Error/Error404'
// Styles
import './styles/app.scss'
// ##############################################################

// Redux store
const store = createStore(rootReducer)

// Check store state
store.subscribe(() => console.log('store:', store.getState()))

// App routes
const routes = (
   <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

// ReactDOM.render
const root = document.getElementById("root")
render(routes, root)

