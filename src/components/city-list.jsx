import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {
  const {cities} = props;

  const renderCityList = (list) => {
    return list.map((item, i) => <option key={i} value={`${item}`}></option>);
  }

  return (
    <datalist id="cityList">
      {renderCityList(cities)}
    </datalist>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CityList;