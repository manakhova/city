import {ActionType} from './action';

const initialState = {
  cities: [], 
  isDataLoaded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        isDataLoaded: true
      };
  }
  
  return state;
};
  
export {reducer};