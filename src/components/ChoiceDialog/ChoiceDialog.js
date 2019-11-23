import React from 'react';
import PropTypes from 'prop-types';
import './ChoiceDialog.scss';
import Button from '../../components/Button/Button'

class ChoiceDialog extends React.Component {
  constructor(props) {
    super(props)
    this.renderChoice = this.renderChoice.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
  }

  createOnClick(button) {
    return function (e) {
      button.buttonFunc(e, this.props)
    };
  }

  renderChoice(button) {
    let onClick = this.createOnClick(button).bind(this);
    return (
      <Button key={button.id} text={button.buttonText} onClick={onClick} />
    );
  }

  render() {
    let choices = this.props.step.choices.map(this.renderChoice);
    return (
    <div className="choice-dialog fade-in">
        {choices}
    </div>
    );
  }
};

ChoiceDialog.defaultProps = {

};

ChoiceDialog.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default ChoiceDialog;
