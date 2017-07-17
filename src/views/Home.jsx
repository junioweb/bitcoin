import React, {Component} from 'react'
import { Link as RouterLink } from 'react-router-dom'

// Components Bootstrap v4
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

// Components
import ModelAddCampaign from '../components/ModalAddCampaign'

// Icons
import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet'
import MdApps from 'react-icons/lib/md/apps'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      size: 'md'
    }

    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Breadcrumb className="mt-3">
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="4" className="mt-2">
            <Card block outline color="warning">
              <CardTitle>Add campaign</CardTitle>
              <CardText>Choose how many wallets you want to create and the amount to carry them.</CardText>
              <Button color="primary" onClick={this.toggle}><MdAccountBalanceWallet /> Add your campaign</Button>
              <ModelAddCampaign modal={this.state.modal} size={this.state.size} toggle={this.toggle}/>
            </Card>
          </Col>
          <br />
          <Col xs="12" sm="6" md="6" lg="4" className="mt-2">
            <Card block outline color="warning">
              <CardTitle>Manage campaigns</CardTitle>
              <CardText>Manage your wallets, upgrade and remove campaigns.</CardText>
              <Button color="primary" tag={RouterLink} to={'/manage/campaigns'}><MdApps /> Manage your campaigns</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}