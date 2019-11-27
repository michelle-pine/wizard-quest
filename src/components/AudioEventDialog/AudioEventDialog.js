import React from 'react';
import PropTypes from 'prop-types';
import './AudioEventDialog.scss';
import ReactAudioPlayer from 'react-audio-player';
import Button from '../../components/Button/Button';
import store from '../../store/index';

class AudioEventDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audioTime: 0,
    };
    this.onListen = this.onListen.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  onListen() {
    this.setState({audioTime: Math.floor(this.audioPlayer.audioEl.currentTime)});
  }

  renderButtons() {
    let events = this.props.step.events;
    const doubleTraitor = store.getState().doubleTraitor;
    const curTime = this.state.audioTime;
    let currentEvents = events.filter(event => curTime > event.startTime && curTime < event.endTime && doubleTraitor === event.traitorTimeline);
    currentEvents.map(function(event) { event.buttonFunc = event.buttonFunc.bind(this)}.bind(this));
    let buttons = currentEvents.map(function(event) { 
      return (
        <div className="fade-in fixed-button-individual">
          <Button text={event.buttonText} onClick={event.buttonFunc} />
          <p>{event.description}</p>
        </div>
      );
    }.bind(this))
    return buttons;
  }

  render() {
    return (
      <div className="audio-event-dialog fade-in">
        <div className="content-container audio-container">
          <ReactAudioPlayer
            src={this.props.step.audioSrc}
            onListen={this.onListen}
            listenInterval={1000}
            // autoPlay
            controls
            ref={(element) => { this.audioPlayer = element; }}
          />
        </div>
        <div className="img-wrapper">
          <img className="fade-in" src={this.props.step.img} alt="" />
        </div>
        <div className="fixed-button-wrapper">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
};

AudioEventDialog.defaultProps = {

};

AudioEventDialog.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default AudioEventDialog;
