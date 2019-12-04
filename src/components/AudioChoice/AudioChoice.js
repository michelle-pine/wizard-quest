import React from 'react';
import PropTypes from 'prop-types';
import './AudioChoice.scss';
import Button from '../../components/Button/Button';
import Modal from '../Modal/Modal';
import ReactAudioPlayer from 'react-audio-player';

class AudioChoice extends React.Component {
  constructor(props) {
    super(props)
    this.renderChoice = this.renderChoice.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.state = {
      audioTime: 0,
    }
  }

  onModalClose(e) {
    this.setState({modalOpen: false});
  }

  onModalOpen(e) {
    this.setState({modalOpen: true});
  }

  renderModal() {
    let modal = null;

    if (this.state.modalOpen && this.props.step.transcriptions) {
      const transcriptions = this.props.step.transcriptions.map(text => <p>{text}</p>);
      modal = <Modal onClose={this.onModalClose}>
        <div className="transcriptions-wrapper">
          {transcriptions}
        </div>
      </Modal>
    }
    return modal;
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
    const transcriptionButton = this.props.step.transcriptions ? <a tabIndex="0" onClick={this.onModalOpen}>Open Transcription</a> : null;
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
        {transcriptionButton}
      </div>
      <div className="img-wrapper">
        <img className="fade-in" src={this.getImgSrc()} alt="" />
        </div>
      <div className="fixed-button-wrapper">
        {choices}
      </div>
      {this.renderModal()}
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
