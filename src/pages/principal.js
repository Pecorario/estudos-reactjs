import React, { Component } from 'react';

class Principal extends Component {
  render() {
    return (
      <div className="Page">
          <div className="texto">
            <p>Práticas</p>
          </div>

        <div className="btns">
          <button><a href="/first">Props e state</a></button>
          <button><a href="/second">Contador</a></button>
          <button><a href="/third">Cropper, canvas e modal</a></button>
        </div>
      </div>
    );
  }
}

export default Principal;