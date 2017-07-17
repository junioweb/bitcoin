import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

export default class FormWallets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      walletAmount: '',
      walletExpiration: ''
    }
    this.changeAmount = this.changeAmount.bind(this)
    this.changeExpiration = this.changeExpiration.bind(this)
    this.generateForms = this.generateForms.bind(this)
  }
  changeAmount(e) {
    this.setState({ walletAmount: e.target.value })
  }
  changeExpiration(e) {
    this.setState({ walletExpiration: e.target.value })
  }
  generateForms(wallets) {
    const elements = []
    for (var i = 1; i <= wallets; i++) {
      elements.push(
        <ListGroupItem key={i}>
          <ListGroupItemHeading>Wallet #{i}</ListGroupItemHeading>
          <Form>
            <FormGroup row>
              <Label for={"walletAmount"+i} sm={2}>Amount</Label>
              <Col sm={10}>
                <Input type="text" name={"walletAmount"+i} onChange={this.changeAmount} placeholder="Insert a amount for load" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for={"walletExpiration"+i} sm={2}>Date</Label>
              <Col sm={10}>
                <Input type="text" name={"walletExpiration"+i} onChange={this.changeExpiration} placeholder="Insert a expiration date" /> 
              </Col>
            </FormGroup>
          </Form>
        </ListGroupItem>
      )
    }
    return elements
  }

  render() {
    return (
      <ListGroup>
        {this.generateForms(this.props.wallets)}
      </ListGroup>
    )
  }
}