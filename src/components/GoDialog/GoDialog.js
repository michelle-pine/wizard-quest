import React from 'react';
import PropTypes from 'prop-types';
import './GoDialog.scss';
import fadeOut from '../../index';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader'
import Modal from '../Modal/Modal';
import { isEqual } from 'geolocation-utils';


class GoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    
    this.state = {
      modalOpen: false,
      loaderShow: false,

    }
  }


  onButtonClick(e) {
    const desired = {longitude: this.props.step.longitude, latitude: this.props.step.latitude};
    this.setState({loaderShow: true});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        let cur = [position.coords.longitude, position.coords.latitude];
        if (isEqual(desired, cur, this.props.step.epsilon)) {
          console.log(position)
          fadeOut(this.props, e, `/step/${this.props.stepNum + 1}`);
        }
        else {
          this.setState({loaderShow: false});
          this.setState({modalOpen: true});
        }
      }.bind(this));
    }
    else {
      this.setState({loaderShow: false});
      alert("You don't have geolocation services enabled. Enable them before continuing.")
    }

  }

  onModalClose(e) {
    e.preventDefault();
    this.setState({modalOpen: false});
  }

  render() {
    let modal = null;
    if (this.state.modalOpen) {
      modal = <Modal title="You're not there yet!" onClose={this.onModalClose}>
        <div>You haven't arrived at the right location yet. If you don't know where you're going, check out the <a target="_blank" href="https://www.northeastern.edu/campusmap/printable/campusmap.pdf">campus map</a></div>
      </Modal>
    }
    let renderedLoader = null;
    if (this.state.loaderShow) {
      renderedLoader = <Loader />;
    }
    return (
    <div className="go-dialog">
      <div className="content-container">
        {this.props.step.description}
      </div>
      <div className="button-wrapper">
        <Button text="I've Arrived" onClick={this.onButtonClick} />
      </div>
      {modal}
      {renderedLoader}
    </div>
    );
  }
};

GoDialog.defaultProps = {

};

GoDialog.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default GoDialog;
