import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CityList from './city-list';
import {fetchData} from "../store/api-action";

const Main = (props) => {
  const {cities, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <div className="city">
      <label className="city__label" htmlFor="city">Выберите город:</label>
      <input className="city__input" type="text" name="city" id="city" list="cityList"/>
      <CityList cities={cities}/>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    isDataLoaded: state.isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchData());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);