import React, { Component } from 'react'

// Components Route
import { Switch, Route, Redirect } from 'react-router-dom'

// CSS
import './Full.css'

// Components Bootstrap v4
import { Container } from 'reactstrap'

// Componenets
import Header from '../components/Header'
import Home from '../views/Home'
import ManageCampaigns from '../views/ManageCampaigns'

/**
 * @class Full
 * @description Component como container responsável por abrigar todos os componentes da aplicação
 */
class Full extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            <Route path="/home" name="Home" component={Home}/>
            <Route path="/manage/campaigns" name="Manage Campaigns" component={ManageCampaigns}/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </Container>
      </div>
    )
  }
}

export default Full