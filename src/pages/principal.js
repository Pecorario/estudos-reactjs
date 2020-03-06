import React, { Component } from 'react';
import FirstPractice from './first';
import SecondPractice from './second';

class Principal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "principal"
    }
  }

  changeSelected = (item) => {
    this.setState({ selected: item })
  }

  render() {
    return (
      <>
        {this.state.selected === "principal" ? (
          <FirstPractice changeSelected={(item) => this.changeSelected(item)} />
        ) : null }

        {this.state.selected === "contador" ? (
          <SecondPractice changeSelected={(item) => this.changeSelected(item)} />
        ) : null }
      </>
    );
  }
}

export default Principal;