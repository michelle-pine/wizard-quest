import React from 'react';
import PropTypes from 'prop-types';
import './GoDialog.scss';
import fadeOut from '../../index';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader'
import Modal from '../Modal/Modal';
import { insidePolygon, insideCircle } from 'geolocation-utils';


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

  convertCoordinates(lat, long) {
    return [long, lat];
  }

  insideRadius(location, step) {
    return insideCircle(location, this.convertCoordinates(step.center[0], step.center[1]), step.radius);
  }

  onButtonClick(e) {
    this.setState({loaderShow: true});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        let cur = [position.coords.longitude, position.coords.latitude];
        console.log(cur);
        console.log(this.props.step)
        if (this.insideRadius(cur, this.props.step)) {
          fadeOut(this.props, e);
        }
        else {
          this.setState({loaderShow: false});
          this.setState({modalOpen: true});
        }
      }.bind(this),
      function(error) {
        this.setState({loaderShow: false});
        alert("You don't have geolocation services enabled. Enable them before continuing.")
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
    <div className="go-dialog fade-in">
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
