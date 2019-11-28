import React from 'react';
import PropTypes from 'prop-types';
import './AudioChoice.scss';
import Button from '../../components/Button/Button'
import ReactAudioPlayer from 'react-audio-player';

class AudioChoice extends React.Component {
  constructor(props) {
    super(props)
    this.renderChoice = this.renderChoice.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
    this.onListen = this.onListen.bind(this);
    this.state = {
      audioTime: 0,
    }
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

  createOnClick(button) {
    return function (e) {
      button.buttonFunc(e, this.props)
    };
  }

  renderChoice(button) {
    let onClick = this.createOnClick(button).bind(this);
    return (
      <div className="fade-in fixed-button-individual">
        <Button key={button.id} text={button.buttonText} onClick={onClick} />
        <p>{button.description}</p>
      </div>
    );
  }

  render() {
    let choices = this.props.step.choices.map(this.renderChoice);
    return (
    <div className="audio-choice fade-in">
      <div className="content-container audio-container">
        <ReactAudioPlayer
          src={this.props.step.audioSrc}
          onListen={this.onListen}
          listenInterval={1000}
          autoPlay
          controls
          ref={(element) => { this.audioPlayer = element; }}
        />
      </div>
      <div className="img-wrapper">
        <img className="fade-in" src={this.getImgSrc()} alt="" />
        </div>
      <div className="fixed-button-wrapper">
        {choices}
      </div>
    </div>
    );
  }
};

AudioChoice.defaultProps = {
  

};

AudioChoice.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default AudioChoice;
