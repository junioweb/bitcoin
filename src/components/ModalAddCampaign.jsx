import React, {Component} from 'react'

// Funcões para conectar redux
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

    // State principal para montagem do objeto
    this.state = {
      campaign: {}
    }
    // Bind das funções
    this.changeCampaign = this.changeCampaign.bind(this)
  }
  // Função para evento onChange da Campaign
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
            <Button color="primary" onClick={() => {
                this.props.addCampaign(this.state.campaign)
                this.props.toggle()
              }}>Generate</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

// Mapeia actions para props
const mapDispatchToProps = dispatch => bindActionCreators({
  addCampaign
}, dispatch)

// conecta redux porps
export default withRouter(connect(null, mapDispatchToProps)(ModalAddCampaign))