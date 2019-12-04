import React from 'react';
import PropTypes from 'prop-types';
import './AudioDialog.scss';
import fadeOut from '../../index';
import Button from '../../components/Button/Button';
import Modal from '../Modal/Modal';
import ReactAudioPlayer from 'react-audio-player';

class AudioDialog extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.state = {
      audioTime: 0,
      modalOpen: false,
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

  getBackgroundFilter() {
    const filter = this.props.step.backgroundFilter;
    const curTime = this.state.audioTime;
    if (filter && curTime >= filter.startTime && curTime <= filter.endTime) {
      let filterClass = `background-filter ${filter.type} ${filter.fadeIn ? "filter-fade-in" : null}`;
      return (
        <div className={filterClass} >
          <div className={filter.type ==="bad" ? "lightning" : "glow"}></div>
        </div>
      );
    }
    else {
      return null;
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

  render() {
    const transcriptionButton = this.props.step.transcriptions ? <a tabIndex="0" onClick={this.onModalOpen}>Open Transcription</a> : null;
    return (
    <div className="audio-dialog fade-in">
      {this.getBackgroundFilter()}
      <div className="content-container audio-container">
        <ReactAudioPlayer
          src={this.props.step.audioSrc}
          autoPlay
          listenInterval={500}
          onListen={this.onListen}
          controls
          ref={(element) => { this.audioPlayer = element; }}
        />
        {transcriptionButton}
      </div>
      <div className="img-wrapper">
        <img className="fade-in" src={this.getImgSrc()} alt="" />
      </div>
      <div className="button-wrapper">
        <Button text={this.props.step.button} onClick={this.onButtonClick} />
      </div>
      {this.renderModal()}
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
