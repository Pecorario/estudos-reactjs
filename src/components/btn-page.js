import React, { Component } from 'react';
import { Icon } from "antd";

export default class NextPage extends Component {
  render() {
    return(
      <div className="btn-nextPage">
        <Icon type="right-square" style={{ fontSize: '40px', color: ' #000 ', }} /> 
      </div>
    );
  }
}