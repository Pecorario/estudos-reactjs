import React, { Component } from 'react';
import Cropper from 'cropperjs';

export default class Editor extends Component {
  componentDidMount() {
    const image = document.createElement('img');
    image.src = '/imgs/foto.jpg';
    const cropper = new Cropper(image, {
      aspectRatio: 1 / 1,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  }
  
  render() {
    return (
      <div>

      </div>
    );
  }
}
