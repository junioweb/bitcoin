import React, {Component} from 'react'

// Components Bootstrap v4
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// Components
import FormAddCampaign from './FormAddCampaign'

// Icons
import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet'

class ModalAddCampaign extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} size={this.props.size} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}><MdAccountBalanceWallet /> Add campaign</ModalHeader>
          <ModalBody>
            <FormAddCampaign />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Generate</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalAddCampaign