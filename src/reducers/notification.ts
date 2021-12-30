import actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  list: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
