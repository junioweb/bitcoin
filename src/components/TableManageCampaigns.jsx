import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { deleteCampaign } from '../actions/campaignActions'

// Components Bootstrap v4
import { Table, Button } from 'reactstrap'

// Icons
import MdDelete from 'react-icons/lib/md/delete'

class TableManageCampaigns extends Component {
  constructor() {
    super()

    this.generateRow = this.generateRow.bind(this)
  }
  generateRow() {
    const campaigns = this.props.campaigns || []

    return campaigns.map((campaign, key) => (
      <tr key={key}>
        <th scope="row">
          <Button color="danger" size="sm" onClick={() => this.props.deleteCampaign(campaign.title)}><MdDelete /></Button>
        </th>
        <td>{campaign.title}</td>
        <td className="text-center">{campaign.numberWallets}</td>
      </tr>
    ))
  }

  render() {
    return (
      <Table responsive hover size="sm">
        <thead className="thead-inverse">
          <tr>
            <th></th>
            <th>Campaign</th>
            <th className="text-center">Wallets</th>
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
  deleteCampaign
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableManageCampaigns))