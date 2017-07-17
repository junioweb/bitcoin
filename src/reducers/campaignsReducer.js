const INITIAL_STATE = {}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
      case 'FIELD_CHANGED':
          return state

      default:
          return state
  }

}
