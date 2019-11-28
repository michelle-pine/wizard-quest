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
    this.onListen = this.onListen.bind(this);
    this.state = {
      audioTime: 0,
    }
  }

  onButtonClick(e) {
    fadeOut(this.props, e);
  }

  onListen() {
    this.setState({audioTime: Math.floor(this.audioPlayer.audioEl.currentTime)});
  }

  getImgSrc() {
    let images = this.props.step.imgs;
    const curTime = this.state.audioTime;
    let currentImages = images.filter(event => curTime >= event.startTime && curTime <= event.endTime);
    if (currentImages.length > 0) 
      return currentImages[0].src;
    else 
      return "";
  }

  render() {
    return (
    <div className="audio-dialog fade-in">
      <div className="content-container audio-container">
        <ReactAudioPlayer
          src={this.props.step.audioSrc}
          autoPlay
          listenInterval={1000}
          onListen={this.onListen}
          controls
          ref={(element) => { this.audioPlayer = element; }}
        />
      </div>
      <div className="img-wrapper">
        <img className="fade-in" src={this.getImgSrc()} alt="" />
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
