import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor() {
        super()
        this.state={count:0}
    }
    
    handleIncrease = () => {
            this.setState( (prevstate =>({count:prevstate.count+2})) )
        }
    
    handleDecrease = () => {
            this.setState( (prevstate =>({count:prevstate.count-2})) )
        }
  render() {
    return (
      <div className= "ClassComponentContainer">
        <h2 >Class Component</h2>
                <div className="ClassComponent">
                    <h1>{this.state.count}</h1>
                </div>
    
                <button onClick={this.handleIncrease}>Increment</button><br></br>
                <button onClick={this.handleDecrease}>Decrement</button>
      </div>
    )
  }
}

export default ClassCounter;