import React from 'react';
import PropTypes from 'prop-types';
import './Spellbook.scss';
import Button from '../../components/Button/Button';
import BookCover from '../../media/book-cover.jpg';
import BookPage1 from '../../media/book-texture.jpg';
import BookPage2 from '../../media/book-texture2.jpg';
import BookPage3 from '../../media/book-texture3.png';
import Note from '../../media/note.png';
import fadeOut from '../../index';


class Spellbook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
    this.onBackButtonClick = this.onBackButtonClick.bind(this);

  }

  onNextButtonClick(e) {
    e.preventDefault();
    if (this.state.page === 3) {
      fadeOut(this.props, e);
    }
    else {
      this.setState({page: this.state.page + 1});
    }
  }

  onBackButtonClick(e) {
    e.preventDefault();
    this.setState({page: this.state.page - 1});
  }

  renderNextButton() {
    let text = this.state.page === 3 ? "Close Book" : "Next Page";
    return (
      <Button dark={this.state.page > 0} text={text} onClick={this.onNextButtonClick} />
    );
  }

  renderPrevButton() {
    let text = "Previous Page";
    if (this.state.page === 0) {
      return null;
    }
    return (
      <Button dark={this.state.page > 0} text={text} onClick={this.onBackButtonClick} />
    );
  }

  render() {
    let coverGone = this.state.page > 0 ? "gone" : "";
    let page1gone = this.state.page > 1 ? "gone" : "";
    let page2gone = this.state.page > 2 ? "gone" : "";
    return (
    <div className="spellbook">
      <div className="button-wrapper fixed-button">
        {this.renderPrevButton()}
        {this.renderNextButton()}
      </div>
    
      <div style={{backgroundImage:`url(${BookCover})`}} className={`cover book-image ${coverGone}`}>

      </div>
      <div style={{backgroundImage:`url(${BookPage1})`}} className={`page-1 book-image ${page1gone}`}>
        <div className="potion">
          <h4 className="potion-name">
            Spell of Umbral Warding
          </h4>
          <div className="potion-text">
            <strong>Ingredients: </strong>
            <ul>
              <li>Jar of Shadows</li>
              <li>Gray Chalk</li>
              <li>Wolfsbane</li>
              <li>Raven Feathers</li>
              <li>Cricket Eyes</li>
              <li>Black Cat Fur</li>
              <li>Jar of Shadows</li>
              <li>Gray Chalk</li>
              <li>Hallowed Stone</li>
            </ul>
            <strong>Incantation:</strong>
            <p> “I call upon the darkness to ward this hallowed place. Flow along these channels and across this stone. Guard from intrusion, taking all steps to prevent crossing of the barrier. Fade into shadows and bind the sprits of gloom to me for my defence and mine alone.”</p>
            <strong>Process:</strong>
            <ul>
              <li>Mark out the spell circle using the gray chalk on the hallowed stone you wish to ward.</li>
              <li>Place the wolfsbane, raven feathers, cricket eyes, and black cat fur in each respective channeling point of the spell circle.</li>
              <li>Recite the incantation while pouring the jar of shadows out along the edge of the circle.</li>
              <li>Enjoy your new shadow-guarded fortress!</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{backgroundImage:`url(${BookPage2})`}} className={`page-2 book-image ${page2gone}`}>
        <div className="potion">
          <h4 className="potion-name">
           Spell of Immolation
          </h4>
            <div className="potion-text">
              <strong>Ingredients: </strong>
              <ul>
                <li>Sulfur</li>
                <li>Iron Shavings</li>
              </ul>
              <strong>Incantation:</strong>
              <p>“Bring the flames of hell upon this soul.”</p>
              <strong>Process:</strong>
              <ul>
                <li>Blend the sulfur and iron shavings in your hand.</li>
                <li>Speak the incantation  while swirling your finger through the mixture in your other hand.</li>
                <li>Point at your target at the end of the incantation.</li>
                <li>Enjoy the fiery destruction of all who stand in your way!</li>
              </ul>
            </div>
          </div>
      </div>
      <div style={{backgroundImage:`url(${BookPage3})`}} className={`page-3 book-image`}>
        <div className="note">
          <img alt="" className="note-bg" src={Note} />
          <div className="sr-only">
            If you’re reading this, you’ve found the Grand Warlock’s spell book. By order of the Archmage Council we implore you forget you ever saw this. The Grand Warlock is not to be trusted. He nearly destroyed our world, leaving us no choice but to banish him to to yours. If the spell went as planned he should be powerless, his magic seperated into the form of a cat. Do not help him! Do not fall for his tricks! We can not help should power fall into his hands once more. He is not as innocent as he may seem.
          </div>
        </div>
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
