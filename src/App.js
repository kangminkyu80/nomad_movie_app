import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  // state 을 사용 하려면 React.Component 안에서 사용해야 함
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    // setState() 을 호출할 때마다 react는 새로운 state와 함께 render() 를 호출
    // current 는 this.state 를 반환 this.state.xxxxx 사용 X
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button> {/* this.add() 즉시 실행되고 클릭하면 실행 안됨 */}
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
