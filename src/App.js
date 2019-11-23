import React from 'react';
import './App.scss';
import Button from './components/Button/Button'
import fadeOut from './index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    navigator.geolocation.getCurrentPosition(function(position){
      return [position.coords.longitude, position.coords.latitude];
    });
      
  }
  

  onButtonClick(e) {
    fadeOut(this.props, e);
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

