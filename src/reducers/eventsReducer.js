import _ from 'lodash';
import { READ_EVENTS } from "../actions";

const eventsReducer = (state = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return state
  }
}

export default eventsReducer;