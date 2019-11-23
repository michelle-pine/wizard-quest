import React from 'react';
import PropTypes from 'prop-types';
import './Step.scss';
import GoDialog from '../../components/GoDialog/GoDialog'
import AudioDialog from '../../components/AudioDialog/AudioDialog'
import Spellbook from '../../components/Spellbook/Spellbook'

import store from '../../store/index'
import { nextStep } from "../../actions/index";


class Step extends React.Component {
  constructor(props) {
    super(props);
    const state =  store.getState();
    this.state = {
      id: state.currentStep,
      step: state.steps[state.currentStep],
    };
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      store.dispatch(nextStep({step: parseInt(id)}))
      console.log(store.getState().currentStep)
      const state =  store.getState();
      this.setState({
        id: parseInt(id),
        step: state.steps[parseInt(id)],
      });
    }
  }

  renderStepType() {
    if (this.state.step.type === "go-dialog") {
      return (
        <GoDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />
      )
    } else if (this.state.step.type === "audio") {
      return <AudioDialog history={this.props.history} step={this.state.step} stepNum={this.state.id} />;
    } else if (this.state.step.type === "spellbook") {
      return <Spellbook history={this.props.history} step={this.state.step} stepNum={this.state.id} />
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
