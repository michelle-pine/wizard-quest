import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button/Button'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="modal-container">
        <div id="dialog-modal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{this.props.title}</h2>
            </div>
            <div className="modal-body">
              {this.props.children}
              <Button text="Close" onClick={this.props.onClose}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Modal.defaultProps = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.propTypes = {

};

export default Modal;
