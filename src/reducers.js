import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"
import { reducer as toastrReducer } from 'react-redux-toastr'

import CampaignsReducer from './reducers/campaignsReducer'

const reducers = combineReducers({
  campaigns: CampaignsReducer,
  toastr: toastrReducer,
  router: routerReducer
})

export default reducers