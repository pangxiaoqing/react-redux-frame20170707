import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import Source from '../components/Source-component'
import * as SourceActions from '../actions/source-action'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  console.log(234222,state)
  const { source,countera,sourcevalue,idaaaa} = state
  return {
    a:idaaaa,
    items: source,
    urlhref:sourcevalue
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SourceActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Source)


/*import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import Source from '../components/Source-component'
// import * as SourceActions from '../actions/source-action'
import { aaaaa } from '../actions/source-action'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  console.log(234222,state)
  const { source,countera,sourcevalue,idaaaa} = state
  return {
    a:idaaaa,
    items: source,
    urlhref:sourcevalue
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SourceActions, dispatch)
}
const mapDispatchToProps=function(dispatch,ownProps) {
  // return bindActionCreators(SourceActions, dispatch)
  return{
    onClickaa:function(){
      return dispatch(aaaaa)
    }
  }
}
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(aaaaa());
    }
  };
}

const mapDispatchToProps = {
  onClickaa:aaaaa
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Source)*/








