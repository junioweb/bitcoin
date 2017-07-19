import React, {Component} from 'react'

// Funcões para conectar redux
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Funcão para notificações
import {toastr} from 'react-redux-toastr'

// Função para redirecionamento
import { push } from 'react-router-redux'

// Biblioteca nativa do javascript para gerar arquivos
import Blob from 'blob'

// Actions
import { deleteCampaign } from '../actions/campaignActions'

// Components Bootstrap v4
import { Table, Button } from 'reactstrap'

// Components
import ModelAddCampaign from './ModalAddCampaign'

// Icons
import MdDelete from 'react-icons/lib/md/delete'
import MdAddCircle from 'react-icons/lib/md/add-circle'
import MdInsertLink from 'react-icons/lib/md/insert-link'
import MdCloudDownload from 'react-icons/lib/md/cloud-download'

class TableManageCampaigns extends Component {
  constructor() {
    super()

    // State do modal AddCampaign
    this.state = {
      isOpen: false,
      modal: false,
      size: 'md'
    }
    // Bind das funções
    this.toggleModal = this.toggleModal.bind(this)
    this.generateRow = this.generateRow.bind(this)
    this.toastrConfirmOptions = this.toastrConfirmOptions.bind(this)
    this.makeTextFile = this.makeTextFile.bind(this)
  }
  // Função para toggle do modal AddCampaign
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  // Função de options para notificação do tipo confirm
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
  // Função para construir o arquivo
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
  // Função para gerar as linhas da tabela de acordo com a quantidade de wallets
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
            <a className="visibility"
              href={this.makeTextFile(
                wallet.bitcoin.privateKey, 
                wallet.bitcoin.address,
                baseurl,
                wallet.bitcoin.seed)} 
              download={wallet.bitcoin.address+','+wallet.amount+'.txt'}>
                {wallet.bitcoin.address+','+wallet.amount}
            </a>
            <a className="visibility-invert btn btn-info btn-sm"
              href={this.makeTextFile(
                wallet.bitcoin.privateKey, 
                wallet.bitcoin.address,
                baseurl,
                wallet.bitcoin.seed)} 
              download={wallet.bitcoin.address+','+wallet.amount+'.txt'}>
                <MdCloudDownload />
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
            <th>
              <Button color="info" size="sm" onClick={this.toggleModal}><MdAddCircle /> <span className="visibility">Add Campaign</span></Button>
              <ModelAddCampaign modal={this.state.modal} size={this.state.size} toggle={this.toggleModal}/>
            </th>
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

// Mapeia state para props
const mapStateToProps = state => ({
  campaigns: state.campaigns,
})
// Mapeia actions para props
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteCampaign,
  push
}, dispatch)

// conecta redux porps
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableManageCampaigns))