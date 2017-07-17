import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// CSS
import './Full.css'

// Components Bootstrap v4
import { Container } from 'reactstrap'

// Componenets
import Header from '../components/Header'
import Home from '../views/Home'
import ManageCampaigns from '../views/ManageCampaigns'

class Full extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            <Route path="/home" name="Home" component={Home}/>
            <Route path="/manage/campaigns" name="Manage Campaigns" component={ManageCampaigns}/> 
            {/* <Route path="/components/buttons" name="Buttons" component={Buttons}/>
            <Route path="/components/cards" name="Cards" component={Cards}/>
            <Route path="/components/forms" name="Forms" component={Forms}/>
            <Route path="/components/modals" name="Modals" component={Modals}/>
            <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
            <Route path="/components/switches" name="Swithces" component={Switches}/>
            <Route path="/components/tables" name="Tables" component={Tables}/>
            <Route path="/components/tabs" name="Tabs" component={Tabs}/>
            <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
            <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
            <Route path="/widgets" name="Widgets" component={Widgets}/>
            <Route path="/charts" name="Charts" component={Charts}/> */}
            <Redirect from="/" to="/home"/>
          </Switch>
        </Container>
      </div>
    )
  }
}

export default Full