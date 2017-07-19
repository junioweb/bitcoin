import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {toastr} from 'react-redux-toastr'
import { push } from 'react-router-redux'
import Blob from 'blob'

// Actions
import { deleteCampaign } from '../actions/campaignActions'

// Components Bootstrap v4
import { Table, Button } from 'reactstrap'

// Icons
import MdDelete from 'react-icons/lib/md/delete'
import MdAccountBalanceWallet from 'react-icons/lib/md/account-balance-wallet'
import MdInsertLink from 'react-icons/lib/md/insert-link'

class TableManageCampaigns extends Component {
  constructor() {
    super()

    this.generateRow = this.generateRow.bind(this)
    this.toastrConfirmOptions = this.toastrConfirmOptions.bind(this)
    this.makeTextFile = this.makeTextFile.bind(this)
  }
  toastrConfirmOptions(campaign, wallet) {
    return {
      onOk: () => {
        try {
          this.props.deleteCampaign(campaign, wallet)
          toastr.success('Success', 'Successful operation')
        } catch (error) {
          toastr.error('Error occurred', error)
        }
      },
      onCancel: () => (false)
    }
  }
  makeTextFile(privateKey, address, baseurl, seed) {
    const text = privateKey + ' ' + address + ' ' + baseurl + '#' + seed
    const data = new Blob([text], {type: 'text/plain'})
    let textFile = null

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile)
    }

    textFile = window.URL.createObjectURL(data)

    return textFile
  }
  generateRow() {
    const campaigns = this.props.campaigns || []
    const baseurl = "https://coinwise.io/w/"

    return campaigns.map((campaign) => (
      campaign.wallets.map((wallet, key) => (
        <tr key={key}>
          <th scope="row">
            <a href={baseurl+'#'+wallet.bitcoin.seed} target="_blank" className="btn btn-info btn-sm"><MdInsertLink /></a> {' '}
            <Button color="danger" size="sm" onClick={() => {toastr.confirm('Do you really want to delete?', this.toastrConfirmOptions(campaign.title, wallet.number))}}><MdDelete /></Button>
          </th>
          <td>{"Wallet #"+wallet.number}</td>
          <td>{campaign.title}</td>
          <td>
            <a 
              href={this.makeTextFile(
                wallet.bitcoin.privateKey, 
                wallet.bitcoin.address,
                baseurl,
                wallet.bitcoin.seed)} 
              download={wallet.bitcoin.address+','+wallet.amount+'.txt'}>
                {wallet.bitcoin.address+','+wallet.amount}
            </a>
          </td>
        </tr>
      ))
    ))
  }

  render() {
    return (
      <Table responsive hover size="sm">
        <thead className="thead-inverse">
          <tr>
            <th></th>
            <th>Wallet</th>
            <th>Campaign</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {this.generateRow()}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteCampaign,
  push
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableManageCampaigns))