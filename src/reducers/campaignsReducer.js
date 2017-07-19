export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_CAMPAIGN':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_CAMPAIGN':
      return state.map(campaign =>
        (campaign.title === action.payload.campaign) 
          ? {...campaign, wallets: campaign.wallets.filter(value => (
              campaign.title === action.payload.campaign && value.number !== action.payload.wallet
            ))}
          : campaign
      )

    default:
        return state
  }

}
