import React from 'react'
export default React.createClass({
	urlClick(e){
		const _target = e.target;
		if(_target.nodeName==="INPUT"){console.log(111,_target.getAttribute('data-val'))
			this.props.onClick2(_target.getAttribute('data-val'),_target.getAttribute('data-url'));
		}
	},
	render(){
		const {sourceval,sourcedata} = this.props;
		console.log(this.props.sourceval);
		console.log(this.props.sourcedata);
		const items = sourcedata.map(function(data){
			let element = data.data
			return <a target='_blank' href={element.url}>{element.title}</a>
		});
		// console.log(items) getAttribute
		return(
			<div onClick={this.urlClick}>
				<input type="button" value="reactjs" data-val="reactjs" data-url="https://www.reddit.com/r/reactjs.json"/>
				<input type="button" value="frontend" data-val="frontend" data-url="https://www.reddit.com/r/frontend.json"/>
				<div>获取DOM元素的url：{sourceval}</div>
				<div ref='odiv'>
					{
						
						items
						
					}
				</div>
			</div>
			)
	}
})