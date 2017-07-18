import { toastr } from 'react-redux-toastr'

export function addCampaign(campaign) {
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