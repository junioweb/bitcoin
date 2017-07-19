import { toastr } from 'react-redux-toastr'
import walletGenerator from '../walletGenerator'
import { push } from 'react-router-redux'

export function addCampaign(campaign) {
  const masterKey = 'talents.jun2017'

  try {
    campaign.wallets.map((wallet, index) => (
      wallet.bitcoin = walletGenerator(masterKey, campaign.title, index)
    ))
    toastr.success('Campaign added', 'Successful operation')
    return [
      {
        type: 'ADD_CAMPAIGN',
        payload: campaign
      },
      (dispatch) => {dispatch(push('/manage/campaigns'))}
    ]
  } catch (error) {
    toastr.error('Error occurred', error)
  }
}

export function deleteCampaign(campaign, wallet) {
  return {
      type: 'DELETE_CAMPAIGN',
      payload: {
        campaign: campaign,
        wallet: wallet
      }
  }
}