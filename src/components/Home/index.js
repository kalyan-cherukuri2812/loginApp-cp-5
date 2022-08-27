import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {login: false}

  loginbtn = () => {
    this.setState(prev => ({login: !prev.login}))
  }

  logoutbtn = () => {
    this.setState(prev => ({login: !prev.login}))
  }

  render() {
    const {login} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <Message login={login} />
          {login === false ? (
            <Login login={this.loginbtn} />
          ) : (
            <Logout login={this.logoutbtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
