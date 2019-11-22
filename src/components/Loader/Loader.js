import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';
import loader from '../../media/loader.svg';


class Loader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="loader-wrapper">
        <img src={loader} />
      </div>
    );
  }
};

Loader.defaultProps = {

};

Loader.propTypes = {

};

export default Loader;
