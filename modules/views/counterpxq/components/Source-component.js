import React from 'react'
export default React.createClass({
	handleClick () {//console.log(3456789,this.props)
		this.props.Fetch(this.props.urlhref);
	},
	aaaClick(e){
		console.log(123321,e.target.getAttribute('data-val'));//自定义属性一定加data-...
		// this.props.aaaaa(e.target.id)
		this.props.aaaaa(e.target.getAttribute('data-val'))
		// this.props.onClickaa(e.target.getAttribute('data-val'))reactjsurl
	},
	reactjsurlClick(e){
		this.props.reactjsurl(e.target.getAttribute('data-val'))
	},
	frontendurlClick(e){
		this.props.frontendurl(e.target.getAttribute('data-val'))
	},
	render(){
		const {urlhref,reactjsurl,frontendurl,Fetch,items,a} = this.props;
		// console.log(items) getAttribute
		return(
			<div>
				<input type="button" data-val="reactjsaaa" value="aaa" onClick={this.aaaClick}/>
				<input type="button" value="reactjs" data-val="https://www.reddit.com/r/reactjs.json" onClick={this.reactjsurlClick}/>
				<input type="button" value="frontend" data-val="https://www.reddit.com/r/frontend.json" onClick={this.frontendurlClick}/>
				<button  onClick={this.handleClick}>点击</button>
				<div>选择的url地址为：{urlhref}</div>{' '}
				<div>获取DOM元素的id：{a}</div>
				<div ref='odiv'>
					{
						items.map(function(data){
							let element = data.data
							return <a target='_blank' href={element.url}>{element.title}</a>
						})
						
						
					}
				</div>
			</div>
			)
	}
})