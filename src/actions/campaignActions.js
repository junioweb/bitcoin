import { toastr } from 'react-redux-toastr'
import walletGenerator from '../walletGenerator'

export function addCampaign(campaign) {
  const masterKey = 'talents.jun2017'
  
  campaign.bitcoin = walletGenerator(masterKey, campaign)[0]

  toastr.success('Campaign added', 'Successful operation')
  return {
      type: 'ADD_CAMPAIGN',
      payload: campaign
  }
}

export function deleteCampaign(title) {
  return {
      type: 'DELETE_CAMPAIGN',
      payload: title
  }
}