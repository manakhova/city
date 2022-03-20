import {ActionCreator} from "./action";

const getCities = (data) => {
  return data.map((item) => (item.city))
};

export const fetchData = () => (dispatch, _getState, api) => (
  api.get()
    .then(({data}) => dispatch(ActionCreator.loadCities(getCities(data))))
);