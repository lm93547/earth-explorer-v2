/*
 *
 * Map reducer
 *
 */
import * as consts from './constants'
import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const mapReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case consts.DEFAULT_ACTION:
          break;
      default:
          return state
  }
})

export default mapReducer;
