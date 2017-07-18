import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

// Components
import FormWallets from './FormWallets'

export default class FormAddCampaign extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaign: {}
    }
    this.changeTitle = this.changeTitle.bind(this)
    this.changeNumberWallets = this.changeNumberWallets.bind(this)
    this.changeWallets = this.changeWallets.bind(this)
  }
  changeTitle(e) {
    this.setState({
      campaign: {
        ...this.state.campaign,
        title: e.target.value
      }
    }, () => {
      this.props.changeCampaign(this.state.campaign)
    })
  }
  changeNumberWallets(e) {
    this.setState({
      campaign: {
        ...this.state.campaign,
        numberWallets: e.target.value
      }
    }, () => {
      this.props.changeCampaign(this.state.campaign)
    })
  }
  changeWallets(wallets) {
    this.setState({
      campaign: {
        ...this.state.campaign,
        wallets: wallets
      }
    }, () => {
      this.props.changeCampaign(this.state.campaign)
    })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="campaignTitle" sm={2}>Title</Label>
            <Col sm={10}>
              <Input type="text" onChange={this.changeTitle} placeholder="Insert a title for the campaign" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="campaignWallets" sm={2}>Wallets</Label>
            <Col sm={10}>
              <Input type="number" onChange={this.changeNumberWallets} placeholder="Insert the number of wallets" /> 
              <FormText color="muted">
                Please enter the number of wallets that will be created for the campaign.<br />
                The fields will be generated automatically, according to the number of wallets, to fill the amount of the load and its expiration date.
              </FormText>
            </Col>
          </FormGroup>
        </Form>
        <FormWallets wallets={this.state.campaign.numberWallets} changeWallets={this.changeWallets} />
      </div>
    )
  }
}