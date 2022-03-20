export const ActionType = {
  GET_CITIES: `getCities`
};


export const ActionCreator = {
  loadCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities,
  })
};