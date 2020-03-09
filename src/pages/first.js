import React, { Component } from 'react';
import NextPage from '../components/btn-page';

//Estudos acerca de props, state e components do vídeo https://www.youtube.com/watch?v=WPYI2CcRX7c&t=311s

class MyButton extends Component {
  render() {
    return(
      <button 
      onClick={()=> { this.props.handleClick(this.props.label); }}>
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return(
      <p>Cliquei no: {this.props.text}</p>
    );
  }
}

class FirstPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  render() {
    return (
      <div className="Page">
        <div className="texto">
          <MyLabel text={this.state.labelText} />
        </div>
        
        <div className="btns">
          <MyButton handleClick={this.setLabelText} label="Botão 1" />
          <MyButton handleClick={this.setLabelText} label="Botão 2" />
          <MyButton handleClick={this.setLabelText} label="Botão 3" />
          <MyButton handleClick={this.setLabelText} label="Botão 4" />
        </div>
        
        <NextPage />
      </div>
    );
  }
}

export default FirstPractice;