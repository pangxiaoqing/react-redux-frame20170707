 import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import Counter from '../components/Counter-component'
import * as CounterActions from '../actions/counter-action'

//将state.counter绑定到props的counter
function mapStateToProps(state) {console.log(state)
  return {
    counter: state.countera
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)









/*//一。 store.dispatch(Action)
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
store.dispatch(addTodo('Learn Redux'));
// 二。输出------mapDispatchToProps用来建立 UI 组件的参数到store.dispatch方法的映射，可以是对象，也可以是函数（方法）
//1.mapDispatchToProps中Action对象写法
const mapDispatchToProps = function(dispatch,ownProps){
	return {
		onClick:function(){
			dispatch({
				type:'pppp',
				value:ownProps.value
			})
		}
	}
}
// 2，mapDispatchToProps中Action对象（函数写法）
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function(){
    	dispatch(increaseAction)
    }
  }
}
// Action Creator
const increaseAction = { type: 'increase' }*/

