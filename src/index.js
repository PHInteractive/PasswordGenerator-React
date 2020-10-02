import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class PasswordGeneratorPanel extends React.Component{
  constructor(){
    super();
    this.state = {
      TextFieldText : "Press Go"
    }
  }

  render(){
    return([
      this.RenderHeading(),
      this.RenderTextField(),
      this.RenderStartButton()
    ]);
  }

  RenderHeading() {
    return(
      <h1>ReactJS Password Generator</h1>
    );
  }

    RenderTextField() {
      return(
        <div>
          <input className="TextBox" type="text" readOnly value={this.state.TextFieldText}></input>
        </div>
      );
    }

    RenderStartButton(){
      return(
        <button className="StartButton" onClick={() => this.GenerateRandomString()}>GO</button>
      );
    }

    GenerateRandomString(){
      var RandomNumber = Math.floor(Math.random() * 1000) + 1;
      this.setState({TextFieldText: RandomNumber});
    }
}



ReactDOM.render(
  <PasswordGeneratorPanel/>,
  document.getElementById('root')
);

