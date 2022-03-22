import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../store/action';
import {connect} from 'react-redux';
import CityList from './city-list';
import {fetchData} from "../store/api-action";

const Main = (props) => {
  const {cities, query, onLoadData, setQuery} = props;

  const handleInputChange = (query) => (evt) => {
    evt.preventDefault();
    query = evt.target.value;
    setQuery(query);
    onLoadData(query);
  };

  return (
    <div className="city">
      <label className="city__label" htmlFor="city">Выберите город:</label>
      <input className="city__input" type="text" name="city" id="city" list="cityList" onInput={handleInputChange(query)}/>
      <CityList cities={cities}/>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  query: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    query: state.query,
    isDataLoaded: state.isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData(query) {
    dispatch(fetchData(query));
  },
  setQuery(query) {
    dispatch(ActionCreator.setQuery(query));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);