import React, { Component } from 'react'
import './App.css'
import MenuView from './components/MenuView'
import Equipment from './components/Equipment'
import EquipmentUpdate from './components/EquipmentUpdate'
import N95 from './components/N95'
import FaceShield from './components/FaceShield'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/equipment')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        const { data } = response
        this.setState({ data })
      })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <MenuView />
            <Switch>
              <Route path='/N95'>
                <N95 />
              </Route>
              <Route path='/FaceShield'>
                <FaceShield />
              </Route>
              <Route path='/update'>
                <EquipmentUpdate data={data} />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/'>
                <Equipment data={data} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

  //     return (
  //       <div className='App'>
  //         <MenuView />
  //         <Equipment data={data} />
  //         <N95 />
  //         <FaceShield />
  //         <Gown />
  //         <Shoe />
  //         <Login />
  //       </div>
  //     )
  //   }
  // }
}
export default App
