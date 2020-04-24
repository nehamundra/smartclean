import { GET_ALL_DATA } from "../actions";

export default function getData(state = [], action) {
  switch (action.type) {
    case GET_ALL_DATA:
      return [
        ...state,
        ...action.data,
      ]
    
    default:
      return [
        ...state,
      ]
  }
}
