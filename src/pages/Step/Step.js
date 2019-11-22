import React from 'react';
import PropTypes from 'prop-types';
import './Step.scss';
import GoDialog from '../../components/GoDialog/GoDialog'
import AudioDialog from '../../components/AudioDialog/AudioDialog'
import { STEPS } from '../../constants/steps'

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id),
      step: STEPS[props.match.params.id]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        id: parseInt(this.props.match.params.id),
        step: STEPS[this.props.match.params.id]
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
