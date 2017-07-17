import React from 'react'
import ReactDOM from 'react-dom'

// Importações para configurações de rotas da SPA (Single Page Application)
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// CSS do framework Bootstrap v4
import 'bootstrap/dist/css/bootstrap.min.css'

// Containers
import Full from './containers/Full'

// Registro ServiceWorker para PWA (Progressive Web App - create-react-app)
import registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory();

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      {/* <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/> */}
      <Route path="/" name="Principal" component={Full}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))
registerServiceWorker()