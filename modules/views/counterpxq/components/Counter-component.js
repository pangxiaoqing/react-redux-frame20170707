import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量 
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <p>
        Clicked: {counter} times 
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }
}
//限制组件的props安全

export default Counter
