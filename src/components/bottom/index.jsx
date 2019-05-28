import React, { Component } from 'react';
import '../bottom/style.scss'

export default class BottomSection extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
  render() {
    return (
      <div className="bottom-container">
        Bottom Section
      </div>
    );
  }
}
