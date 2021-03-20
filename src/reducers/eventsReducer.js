import _ from 'lodash';
import { READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT, CREATE_EVENT } from "../actions";

const eventsReducer = (state = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete state[action.id]
      return { ...state } // 新たな参照メモリで生成
    case READ_EVENT:
      const data = action.response.data;
      return { ...state, [data.id]: data }
    case UPDATE_EVENT:
      const updated_data = action.response.data;
      return { ...state };
    case CREATE_EVENT:

    default:
      return state
  }
}

export default eventsReducer;