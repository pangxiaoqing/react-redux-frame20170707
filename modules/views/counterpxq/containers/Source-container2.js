import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import Source2 from '../components/Source-component2'
import {Fetch} from '../actions/source-action2'

//将state.counter绑定到props的counter
function mapStateToProps(state) {console.log(222222222222,state.sourcevalue2.sourceval);
	const { source,countera,sourcevalue,idaaaa,sourcevalue2} = state
  return {
  	sourceval:sourcevalue2.sourceval,
 	sourcedata:sourcevalue2.data
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators(SourceActions, dispatch)
}*/
const mapDispatchToProps={
	onClick2:Fetch
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Source2)


