import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

export default class FormWallets extends Component {
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
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Wallet #1</ListGroupItemHeading>
          <Form>
            <FormGroup row>
              <Label for="campaignTitle" sm={2}>Amount</Label>
              <Col sm={10}>
                <Input type="text" name="title" id="campaignTitle" placeholder="Insert a amount for load" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="campaignWallets" sm={2}>Date</Label>
              <Col sm={10}>
                <Input type="text" name="title" id="campaignWallets" onChange={this.changeValue} value={this.state.currentValue} placeholder="Insert a expiration date" /> 
              </Col>
            </FormGroup>
          </Form>
        </ListGroupItem>
      </ListGroup>
    )
  }
}