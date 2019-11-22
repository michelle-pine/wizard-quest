import React from 'react';
import './App.scss';
import Button from './components/Button/Button'
import fadeOut from './index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    fadeOut(this.props, e, "step/1");
  }
  
  render() {
    return (
      <div id="content-wrapper" className="content-wrapper fade-in">
        <div className="content-container">
          <h1 className="app-title">
            WizardQuest
          </h1>
        </div>
        <Button text="Start" onClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
