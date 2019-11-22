import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className={`quest-button ${this.props.dark ? "dark" : null}`} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
};

Button.defaultProps = {
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  dark: PropTypes.bool,
};

export default Button;
