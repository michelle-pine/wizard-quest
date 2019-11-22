import React from 'react';
import PropTypes from 'prop-types';
import './AudioDialog.scss';
import fadeOut from '../../index';
import Button from '../../components/Button/Button'
import ReactAudioPlayer from 'react-audio-player';

class AudioDialog extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    fadeOut(this.props, e, `/step/${this.props.stepNum + 1}`);
  }

  render() {
    return (
    <div className="audio-dialog">
      <div className="content-container audio-container">
        <ReactAudioPlayer
          src={this.props.step.audioSrc}
          autoPlay
          controls
        />
      </div>
      <div className="button-wrapper">
        <Button text={this.props.step.button} onClick={this.onButtonClick} />
      </div>
    </div>
    );
  }
};

AudioDialog.defaultProps = {

};

AudioDialog.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default AudioDialog;
