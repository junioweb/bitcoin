import React, {Component} from 'react'

// Components Bootstrap v4
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { Table } from 'reactstrap'

export default class FormWallets extends Component {
  constructor(props) {
    super(props)

    // State para montagem das Wallets da Campaign
    this.state = {
      wallets: []
    }
    // Bind das funções
    this.changeAmount = this.changeAmount.bind(this)
    this.changeExpiration = this.changeExpiration.bind(this)
    this.generateForms = this.generateForms.bind(this)
  }
  // Função para evento onChange do Amount das Wallets
  changeAmount(e) {
    // Obtem o number sequence para incluir no objeto Wallet
    const number = e.target.name.replace('amount','')

    // Copia state para maior liberdade nas modificações
    let stateCopy = Object.assign({}, this.state)
    stateCopy.wallets = stateCopy.wallets.slice()
    stateCopy.wallets[number-1] = Object.assign({}, stateCopy.wallets[number-1])
    stateCopy.wallets[number-1].number = number
    stateCopy.wallets[number-1].amount = e.target.value

    // Altera state com as modificações da cópia
    this.setState(stateCopy, () => {
      this.props.changeWallets(this.state.wallets)
    })
  }
  // Função para evento onChange da Expiration Date das Wallets
  changeExpiration(e) {
    // Obtem o number sequence para incluir no objeto Wallet
    const number = e.target.name.replace('expiration','')

    // Copia state para maior liberdade nas modificações
    let stateCopy = Object.assign({}, this.state)
    stateCopy.wallets = stateCopy.wallets.slice()
    stateCopy.wallets[number-1] = Object.assign({}, stateCopy.wallets[number-1])
    stateCopy.wallets[number-1].number = number
    stateCopy.wallets[number-1].expiration = e.target.value

    // Altera state com as modificações da cópia
    this.setState(stateCopy, () => {
      this.props.changeWallets(this.state.wallets)
    })
  }
  generateForms(wallets) {
    const elements = []
    for (var i = 1; i <= wallets; i++) {
      elements.push(
        <tr key={i}>
          <th>
            <h5>Wallet #{i}</h5>
            <Form>
              <FormGroup row>
                <Label for={"walletAmount"+i} sm={2}>Amount</Label>
                <Col sm={10}>
                  <Input type="number" step="0.001" name={"amount"+i} onChange={this.changeAmount} placeholder="Insert a amount for load" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for={"walletExpiration"+i} sm={2}>Expiration</Label>
                <Col sm={10}>
                  <Input type="date" name={"expiration"+i} onChange={this.changeExpiration} placeholder="Insert a expiration date" />
                </Col>
              </FormGroup>
            </Form>
          </th>
        </tr>
      )
    }
    return elements
  }

  render() {
    return (
      <Table>
        <tbody>
          {this.generateForms(this.props.wallets)}
        </tbody>
      </Table>
    )
  }
}