import React from 'react';
import PropTypes from 'prop-types';
import './Step.scss';

class Step extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let id = this.props.match.params.id;
    return (
    <div className="content-wrapper fade-in">
      Step {id}
    </div>
    );
  }
};

Step.defaultProps = {

};

Step.propTypes = {

};

export default Step;
