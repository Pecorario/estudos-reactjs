import React, { Component } from 'react';
import NextPage from '../components/btn-page';
import Editor from '../components/Editor';

//Aprendendo a usar o Cropper https://github.com/fengyuanchen/cropperjs

class ThirdPractice extends Component {

  render() {
    return (
      <div className="Cropper">
        <Editor />
      </div>
    );
  }
}

export default ThirdPractice;