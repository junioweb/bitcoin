import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

// Components
import FormWallets from './FormWallets'

export default class FormAddCampaign extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentValue: ''
    }
    this.changeValue = this.changeValue.bind(this)
  }
  changeValue(e) {
    this.setState({ currentValue: e.target.value })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="campaignTitle" sm={2}>Title</Label>
            <Col sm={10}>
              <Input type="text" name="title" id="campaignTitle" placeholder="Insert a title for the campaign" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="campaignWallets" sm={2}>Wallets</Label>
            <Col sm={10}>
              <Input type="text" name="title" id="campaignWallets" onChange={this.changeValue} value={this.state.currentValue} placeholder="Insert the number of wallets" /> 
              <FormText color="muted">
                Please enter the number of wallets that will be created for the campaign.<br />
                The fields will be generated automatically, according to the number of wallets, to fill the amount of the load and its expiration date.
              </FormText>
            </Col>
          </FormGroup>
        </Form>
        <FormWallets />
      </div>
    )
  }
}