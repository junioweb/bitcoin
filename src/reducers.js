import { combineReducers } from 'redux'
//import { reducer as toastrReducer } from 'react-redux-toastr'

import CampaignsReducer from './reducers/campaignsReducer'

const reducers = combineReducers({
  campaigns: CampaignsReducer,
})

export default reducers
