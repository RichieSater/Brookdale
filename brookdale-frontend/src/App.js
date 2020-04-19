import React, { Component } from 'react';
import './App.css';
import MenuView from './components/MenuView';
import Equipment from './components/Equipment';
import N95 from './components/N95';
import FaceShield from './components/FaceShield';
import Gown from './components/Gown';
import Shoe from './components/shoe';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/equipment')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <MenuView />
        <Equipment data={data} />
        <N95 />
        <FaceShield />
        <Gown />
        <Shoe />
        <Login />
      </div>
    );
  }
}

export default App;
