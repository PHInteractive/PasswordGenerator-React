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

  data = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

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
      var RandomNumber = "";
      for(this.i = 0; this.i <= 30 - 1; this.i++){
        RandomNumber = RandomNumber + this.data[(Math.floor(Math.random() * 62))];
      }
      var RandomNumber
      this.setState({TextFieldText: RandomNumber});
    }
}



ReactDOM.render(
  <PasswordGeneratorPanel/>,
  document.getElementById('root')
);

