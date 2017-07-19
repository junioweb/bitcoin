import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { addCampaign } from '../actions/campaignActions'

// Components Bootstrap v4
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// Components
import FormAddCampaign from './FormAddCampaign'

// Icons
import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet'

class ModalAddCampaign extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaign: {}
    }
    this.changeCampaign = this.changeCampaign.bind(this)
  }
  changeCampaign(campaign) {
    this.setState({ campaign: campaign })
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} size={this.props.size} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}><MdAccountBalanceWallet /> Add campaign</ModalHeader>
          <ModalBody>
            <FormAddCampaign changeCampaign={this.changeCampaign} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addCampaign(this.state.campaign)}>Generate</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addCampaign
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(ModalAddCampaign))