import React from 'react'
import InputCp from './logincomponentp/inputCp'
import Blockp from './logincomponentp/blockp'

let Data = [
	{
		name:'username',
		detail:'用户名',
        		types:'text'
	},
	{
		name:'password', 
		detail:'密码',
        		types:'password'
	}
];
const Logincomp =React.createClass({
	getInitialState:function(){
		return{
			username:'',
			password:'',
			flag:false
		}
	},
	handleChange:function(e){
		e.preventDefault();console.log(e.target);
		this.setState({flag:false});
		var newState = {};
		newState[e.target.name] = e.target.value;//给对象赋值newState={username:"value",password:"value2"}
		this.setState(newState);//更新state
	},
	 handleClick (e) {
	        e.preventDefault();
	        this.setState({flag:true});
	    },
	render(){
		var array = [], MessArray = [];
		        for(var i = 0; i < Data.length; i++){
		            array.push(<InputCp data={Data[i]} change={this.handleChange}/>);
		        }
		        if(this.state.flag){
		            MessArray.push(<Blockp nameValue={this.state.username} passValue={this.state.password}/>)
		        }
		        /*console.log(MessArray);*/
		return(
			<div>
		                <div>
		                    {array}
		                    <a onClick={this.handleClick}>提交</a>
		                </div>
		                <div>
		                    {MessArray}
		                </div>
		            </div>
			)
	}
})

export default Logincomp;