import React, { Component } from 'react';
import Modal from "react-modal";
import Cropper from "react-cropper";
import '../../node_modules/cropperjs/dist/cropper.css'

//rc -> só usa

class ThirdPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      src: '',
      cropResult: null,
    };
    this.onChangeImage = this.onChangeImage.bind(this);
    this.cropImage = this.cropImage.bind(this);
  }

  onChangeImage(e) {
    e.preventDefault();
    let files;
    
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  cropImage() {
    var avatar = document.getElementById('avatar');
    var imageCropped;
    var canvas;

    if(typeof this.cropper.getCroppedCanvas() == 'undefined') {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });

    canvas = this.cropper.getCroppedCanvas({
      width: 160,
      height: 160,
    });
    imageCropped = avatar.src;
    avatar.src = canvas.toDataURL();
    canvas.toBlob(function (blob) {
      var formData = new FormData();

      formData.append('avatar', blob, 'avatar.jpg');
    });

  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
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
              onChange={this.onChangeImage}
              name="foto"
              id="input"
            />
          </div>

          {/* <div className="img-profile">
            <img id="foto"/>
          </div> */}

        
        <Cropper 
          style={{ height: 400, width: 400 }}
          aspectRatio={1 / 1}
          guides={false}
          src={this.state.src}
          ref={cropper => { this.cropper = cropper; }} 
          viewMode= { 2 }         
        />  
     

          {/* <div className="btns"> */}
            <button className="btn-padrao" onClick={this.cropImage} style={{ float: 'right' }}>Cortar</button>
            {/* <button className="btn-padrao" onClick={this.closeModal}>Close Modal</button> */}
          {/* </div> */}

        </Modal>

        <div>
          <img id="avatar" />
        </div>
        
      </div>
    )
  }
}

export default ThirdPractice;