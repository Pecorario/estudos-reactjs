import React, { Component } from 'react';
import NextPage from '../components/btn-page';
import Cropper from "cropperjs";

//Aprendendo a usar o Cropper https://github.com/fengyuanchen/cropperjs, modal e
//canvas

// function Example() {

  
//   return();
// }

class ThirdPractice extends Component {

  state = {
    image: {}
  };

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
      <div className="Cropper">
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
      </div>
    )
  }
}

export default ThirdPractice;