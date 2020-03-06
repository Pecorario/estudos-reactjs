import React, { Component } from 'react';
import NextPage from '../components/btn-page';

//Montando um contador https://www.youtube.com/watch?v=d5I0nQEyAnw

class SecondPractice extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0
    };
  }

  decrementar() {
    this.setState({
      contador: this.state.contador - 1
     });
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1
     });
  }

  render() {
    return (
      <div className="Page">
        <div className="texto">
          <p>{this.state.contador}</p>
        </div>
        

        <div className="btns">
          <button onClick={this.decrementar.bind(this)}>-</button>
          <button onClick={this.incrementar.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default SecondPractice;