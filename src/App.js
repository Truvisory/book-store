import React, { Component } from 'react';
import NavBar from './components/navbar'
import CartModal from './components/cartmodal';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CartModal />
      </div>
    );
  }
}

export default App;
