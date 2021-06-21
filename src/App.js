import React from 'react';

/**
 * React.Component 가 갖고 있는 function
 * - Life Cycle function ( render() 전 호출 )
 *    -- Mounting : "태어나는 것"과 같아
 *          * constructor()
 *          * static getDerivedStateFromProps() -패스
 *          * render()
 *          * componentDidMount()
 *    -- Updating : 일반적인 업데이트를 의미
 *           * static getDerivedStateFromProps()
 *           * shouldComponentUpdate() -패스 ( 업데이트 할지 말지 결정하는 아이 )
 *           * render()
 *           * getSnapshotBeforeUpdate() -패스 ( 노마드 인생에 사용한 적 없다 함 ㅋ )
 *           * componentDidUpdate()
 *    -- UnMounting : component가 죽는걸 의미 ( 페이지가 바뀔때 )
 *            * componentWillUnmount()
 * - render()
*/
class App extends React.Component{
  constructor(){
    super();
    console.log("Hello");
  }
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

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  
  render(){
    console.log("React");
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
