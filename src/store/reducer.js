import {ActionType} from './action';

const initialState = {
  cities: [], 
  query: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    case ActionType.GET_NAME:
      return {
        ...state,
        query: action.payload
      };
  }
  
  return state;
};
  
export {reducer};