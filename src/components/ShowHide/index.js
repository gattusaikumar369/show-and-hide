// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {ShowHideFirstName: false, ShowHideLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({
      ShowHideFirstName: !prevState.ShowHideFirstName,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      ShowHideLastName: !prevState.ShowHideLastName,
    }))
  }

  render() {
    const {ShowHideFirstName, ShowHideLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div className="Firstname-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              show/Hide Firstname
            </button>
            {ShowHideFirstName && <p className="name">Joe</p>}
          </div>
          <div className="Lastname-container">
            <button className="button" type="button" onClick={this.onLastName}>
              show/Hide Lastname
            </button>
            {ShowHideLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
