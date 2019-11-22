import React from 'react';
import PropTypes from 'prop-types';
import './Spellbook.scss';
import Button from '../../components/Button/Button';
import BookCover from '../../media/book-cover.jpg';
import BookPage from '../../media/book-texture.jpg';
import fadeOut from '../../index';


class Spellbook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    if (this.state.page === 3) {
      fadeOut(this.props, e, `/step/${this.props.stepNum + 1}`);
    }
    else {
      this.setState({page: this.state.page + 1});
    }
  }

  renderButton() {
    let text = this.state.page === 3 ? "Close Book" : "Next Page";
    return (
      <div className="button-wrapper fixed-button">
          <Button dark={this.state.page > 0} text={text} onClick={this.onButtonClick} />
      </div>
    );
  }
  render() {
    let coverGone = this.state.page > 0 ? "gone" : "";
    let page1gone = this.state.page > 1 ? "gone" : "";
    let page2gone = this.state.page > 2 ? "gone" : "";
    return (
    <div className="spellbook">
      {this.renderButton()}
      <div style={{backgroundImage:`url(${BookCover})`}} className={`cover book-image ${coverGone}`}>
      </div>
      <div style={{backgroundImage:`url(${BookPage})`}} className={`page-1 book-image ${page1gone}`}>
      </div>
      <div style={{backgroundImage:`url(${BookPage})`}} className={`page-2 book-image ${page2gone}`}>
      </div>
      <div style={{backgroundImage:`url(${BookPage})`}} className={`page-3 book-image`}>
      </div>

    </div>
    );
  }
};

Spellbook.defaultProps = {

};

Spellbook.propTypes = {
  step: PropTypes.object,
  stepNum: PropTypes.number,
  history: PropTypes.object,
};

export default Spellbook;
