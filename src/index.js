import React from 'react'
import ReactDOM from 'react-dom'
import ReduxToastr from 'react-redux-toastr'

// CSS do framework Bootstrap v4
import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
//import { HashRouter, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

// Middlwwares
import thunk from 'redux-thunk'
import multi from 'redux-multi'

// Components
import Full from './containers/Full'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()
const middleware = routerMiddleware(history)
const store = applyMiddleware(middleware, thunk, multi)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Full}/>
        <ReduxToastr
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          preventDuplicates
        />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)