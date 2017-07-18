export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_CAMPAIGN':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_CAMPAIGN':
      return state.filter((value) => (
        value.title !== action.payload
      ))

    default:
        return state
  }

}
