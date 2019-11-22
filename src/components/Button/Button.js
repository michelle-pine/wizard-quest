import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className="quest-button" onClick={this.props.onClick}>
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
};

export default Button;
