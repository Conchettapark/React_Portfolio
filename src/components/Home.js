import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Conchetta.</CenteredHeader>
        <p>
          I've worked throughout the stack, but I especially love building React UI. I currently build software for the newsroom at the New York Times.
        </p>
       
      </div>
    );
  }
}

export default Home;