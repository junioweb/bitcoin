import { toastr } from 'react-redux-toastr'
import walletGenerator from '../walletGenerator'
import { push } from 'react-router-redux'

// Action para adicionar campaign
export function addCampaign(campaign) {
  // Chave master para criação das chaves Bitcoin
  const masterKey = 'talents.jun2017'

  try {
    // Tratamento de erros
    if(!campaign.title)
      throw new Error('Field title of the campaign is required')
    if(!campaign.wallets)
      throw new Error('Field wallets of the campaign is required')
    if(parseInt(campaign.numberWallets, 10) !== campaign.wallets.length)
      throw new Error('Filled fields do not match the number of wallets generated')

    // Iteração para gerar chaves Bitcoin
    campaign.wallets.map((wallet, index) => {
      // Tratamento de erros
      if(!wallet)
        throw new Error('Wallet #' + wallet.number + ' is invalid')
      if(!wallet.amount)
        throw new Error('Field amount of the Wallet #' + wallet.number + ' is required')
      if(!wallet.expiration)
        throw new Error('Field expiration date of the Wallet #' + wallet.number + ' is required')

      // Função retorna as chaves Bitcoin para cada wallet e insere no objejo campaign
      return wallet.bitcoin = walletGenerator(masterKey, campaign.title, index)
    })

    // Menssagem de sucesso
    toastr.success('Campaign added', 'Successful operation')

    // Multi Action com o middleware redux-multi
    return [
      {
        type: 'ADD_CAMPAIGN',
        payload: campaign
      },
      (dispatch) => {dispatch(push('/manage/campaigns'))}
    ]
  } catch (error) {
    // Menssagem de erro
    toastr.error('Error occurred', error.message)

    return {
      type: 'ERROR',
    }
  }
}

// Action para remover campaign
export function deleteCampaign(campaign, wallet) {
  return {
      type: 'DELETE_CAMPAIGN',
      payload: {
        campaign: campaign,
        wallet: wallet
      }
  }
}