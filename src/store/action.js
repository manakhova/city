export const ActionType = {
  GET_CITIES: `getCities`,
  GET_NAME: 'getName'
};


export const ActionCreator = {
  loadCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities,
  }),
  setQuery: (query) => ({
    type: ActionType.GET_NAME,
    payload: query,
  })
};