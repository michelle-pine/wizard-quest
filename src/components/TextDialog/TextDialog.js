import React from 'react';
import PropTypes from 'prop-types';
import './TextDialog.scss';

class TextDialog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="text-dialog content-container">
      <h2>{this.props.step.title}</h2>
      <p>{this.props.step.subtitle}</p>
    </div>
    );
  }
};

TextDialog.defaultProps = {

};

TextDialog.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default TextDialog;
