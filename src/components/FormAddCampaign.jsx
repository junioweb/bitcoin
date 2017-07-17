import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

// Components
import FormWallets from './FormWallets'

export default class FormAddCampaign extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaignTitle: '',
      campaignWallets: ''
    }
    this.changeTitle = this.changeTitle.bind(this)
    this.changeWallets = this.changeWallets.bind(this)
  }
  changeTitle(e) {
    this.setState({ campaignTitle: e.target.value })
  }
  changeWallets(e) {
    this.setState({ campaignWallets: e.target.value })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="campaignTitle" sm={2}>Title</Label>
            <Col sm={10}>
              <Input type="text" name="campaignTitle" id="campaignTitle" onChange={this.changeTitle} value={this.state.campaignTitle} placeholder="Insert a title for the campaign" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="campaignWallets" sm={2}>Wallets</Label>
            <Col sm={10}>
              <Input type="number" name="campaignWallets" id="campaignWallets" onChange={this.changeWallets} value={this.state.campaignWallets} placeholder="Insert the number of wallets" /> 
              <FormText color="muted">
                Please enter the number of wallets that will be created for the campaign.<br />
                The fields will be generated automatically, according to the number of wallets, to fill the amount of the load and its expiration date.
              </FormText>
            </Col>
          </FormGroup>
        </Form>
        <FormWallets wallets={this.state.campaignWallets} />
      </div>
    )
  }
}