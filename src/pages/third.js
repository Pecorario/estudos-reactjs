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
    
    const foto = document.getElementById('foto');
    var cropper = new Cropper (foto, {
        aspectRatio: 1,
        viewMode: 3,
      });
    }
  
  cropImage = event => {
    var canvas;
    var cropper;
    var initialAvatarURL;
    const cropped = document.getElementById('cropped');

    if(cropper) {
      canvas = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
      });
      initialAvatarURL = cropped.src;
      cropped.src = canvas.toDataURL();
    }
  }

  render() {
    return (
      <div className="Page">
        <div className="btns">
          <button onClick={this.openModal}>Open Modal</button>
        </div>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="input-foto">
            <input
              type="file"
              onChange={obj => this.onChangeInput(obj)}
              name="foto"
              id="input"
            />
          </div>

          <div className="img-profile">
            <img id="foto"/>
          </div>

          <div className="btns">
          <button className="btn-padrao" id="crop">Cortar</button>
            <button className="btn-padrao" onClick={this.closeModal}>Close Modal</button>
          </div>
        </Modal>

        <div className="foto-cortada">
          <img id="cropped" />
        </div>
        
      </div>
    )
  }
}

export default ThirdPractice;