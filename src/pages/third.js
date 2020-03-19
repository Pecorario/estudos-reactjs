import React, { Component } from 'react';
import Modal from "react-modal";
import Cropper from "react-cropper";
import '../../node_modules/cropperjs/dist/cropper';

//rc -> só usa

const cropper = React.createRef(null);

class ThirdPractice extends Component {
  state = {
    showModal: false,
    profile: null,
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

    let imagem = null;
    var reader = new FileReader();
    
    reader.onload = function () {
      var dataURL = reader.result;
      var output = document.getElementById('foto');
      output.src = dataURL;
      imagem = output.src;
    };
    
    this.setState({ profile: imagem });
    reader.readAsDataURL(file[0]);
    }

    _crop(){
      const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
      console.log("CROPPER",dataUrl);
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

        {this.state.profile !== undefined && this.state.profile !== null ?
          <Cropper ref={cropper} src={this.state.profile} style={{height: 400, width: '100%'}} aspectRatio={16 / 9} guides={false} crop={this._crop.bind(this)} />:null  
        }       

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