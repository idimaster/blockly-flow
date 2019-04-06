import React, { Component } from 'react'

import Drools from './blocks/drools'
import DroolsGen from './generators/drools'

import Flow from './blocks/flow'

import FlowWorkspace from './flow/FlowWorkspace'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FlowWorkspace name='test'></FlowWorkspace>
        </header>
      </div>
    );
  }
}

export default App;
