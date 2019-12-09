import React from 'react';
import PropTypes from 'prop-types';
import './Step.scss';
import GoDialog from '../../components/GoDialog/GoDialog';
import AudioDialog from '../../components/AudioDialog/AudioDialog';
import ChoiceDialog from '../../components/ChoiceDialog/ChoiceDialog'
import AudioChoice from '../../components/AudioChoice/AudioChoice';
import TextDialog from '../../components/TextDialog/TextDialog';

import Spellbook from '../../components/Spellbook/Spellbook';

import store from '../../store/index'
import { nextStep } from "../../actions/index";
import AudioEventDialog from '../../components/AudioEventDialog/AudioEventDialog';


class Step extends React.Component {
  constructor(props) {
    super(props);
    const state =  store.getState();
    this.addLocationServices = this.addLocationServices.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      id: state.currentStep,
      step: state.steps[state.currentStep],
      location: null,
    };
  }

  componentDidMount() {
    this.goToStep();
    this.addLocationServices();
  }

  setLocation(position) {
    console.log(position)
    this.setState({location: position.coords});
  }

  addLocationServices() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.setLocation, function(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("You don't have geolocation services enabled. Enable them before continuing.")
            break;
        } 
      }, {enableHighAccuracy: true, maximumAge: 0, timeout: 1000});
    } else {
      alert("You don't have geolocation services enabled. Enable them before continuing.")
    }
  }

  goToStep() {
    const id = this.props.match.params.id;
    store.dispatch(nextStep({step: parseInt(id)}))
    console.log(store.getState().currentStep)
    const state =  store.getState();
    this.setState({
      id: parseInt(id),
      step: state.steps[parseInt(id)],
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.goToStep();
      this.addLocationServices();
    }
  }

  renderStepType() {
    if (this.state.step.type === "go-dialog") {
      return (
        <GoDialog location={this.state.location} history={this.props.history} step={this.state.step} stepNum={this.state.id} />
      )
    } else if (this.state.step.type === "audio") {
      return <AudioDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />;
    } else if (this.state.step.type === "spellbook") {
      return <Spellbook history={this.props.history} step={this.state.step} stepNum={this.state.id} />
    } else if (this.state.step.type === "choice") {
      return <ChoiceDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />
    } else if (this.state.step.type === "audio-choice") {
      return <AudioChoice history={this.props.history} step={this.state.step} stepNum={this.state.id} />
    } else if (this.state.step.type === "audio-event") {
      return <AudioEventDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />
    }
    else if (this.state.step.type === "text") {
      return <TextDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />
    }
  }

  render() {
    return (
    <div id="content-wrapper" className="content-wrapper fade-in">
      {this.renderStepType()}
    </div>
    );
  }
};

Step.defaultProps = {

};

Step.propTypes = {

};

export default Step;
