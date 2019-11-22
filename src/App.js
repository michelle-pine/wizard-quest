import React from 'react';
import './App.scss';
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  
  onButtonClick() {
    this.props.history.push("/step/1");
  }
  
  render() {
    return (
      <div className="App content-wrapper">
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
