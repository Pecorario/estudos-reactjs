import React, { Component } from 'react';
import Modal from "react-modal";
import Cropper from "cropperjs";

//rc -> só usa

class ThirdPractice extends Component {
  state = {
    showModal: false,
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  onChangeInput = event => {
    const file = event.target.files;
    console.log("FILE", file);

    var reader = new FileReader();

    reader.onload = function () {
      var dataURL = reader.result;
      var output = document.getElementById('foto');
      output.src = dataURL;
    };
    reader.readAsDataURL(file[0]);
  }

  render() {
    return (
      <div className="Page">
        <div className="input-foto">
          <input
            type="file"
            onChange={obj => this.onChangeInput(obj)}
            name="foto"
          />
        </div>

        <div className="img-profile">
          <img id="foto" />
        </div>

        <div className="btns">
          <button onClick={this.openModal}>Open Modal</button>
        </div>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="O que é isto?"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>Testando</h2>
          <p>oi</p>
          <div>
            <h1>Oi2</h1>
          </div>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
        
      </div>
    )
  }
}

export default ThirdPractice;