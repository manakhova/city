import {ActionCreator} from "./action";
let jsonpAdapter = require('axios-jsonp');

const getCities = (data) => {
  data.result.shift();
  return data.result.map((item) => (item.name))
};

export const fetchData = (query) => (dispatch, _getState, api) => (
  api.get(`https://kladr-api.ru/api.php&query=${query}`, {adapter: jsonpAdapter})
    .then(({data}) => dispatch(ActionCreator.loadCities(getCities(data))))
);