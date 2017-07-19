import React, {Component} from 'react'

// Funcões para conectar redux
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Funcão para notificações
import {toastr} from 'react-redux-toastr'

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
    this.addCampaign = this.addCampaign.bind(this)
  }
  // Função para evento onChange da Campaign
  changeCampaign(campaign) {
    this.setState({ campaign: campaign })
  }
  addCampaign() {
    try {
      this.props.campaigns.map(campaign => {
        if (campaign.title === this.state.campaign.title)
          throw new Error('Campaign with this title already exists')
        
        return true
      })
      if(this.props.addCampaign(this.state.campaign).type !== "ERROR")
        this.props.toggle()
    } catch (error) {
      // Menssagem de erro
      toastr.error('Error occurred', error.message)
    }
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
            <Button color="primary" onClick={this.addCampaign}>Generate</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

// Mapeia state para props
const mapStateToProps = state => ({
  campaigns: state.campaigns,
})
// Mapeia actions para props
const mapDispatchToProps = dispatch => bindActionCreators({
  addCampaign
}, dispatch)

// conecta redux porps
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalAddCampaign))