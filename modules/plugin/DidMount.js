import React from 'react'

let UserGist = React.createClass({
	getInitialState () {
		return {
			username : 'a',
			lastGistUrl : 'b'
		}
	},
	componentDidMount () {
		var self = this;
		fetch(this.props.source).then(function(res){
			//console.log(res.json());
			res.json().then(function(json){console.log(json)
				if(self.isMounted()){
					self.setState({
						username : json[0].owner.login,
						lastGistUrl : json[0].html_url
					})					
				}				
			})
		})		
	},
	render () {
		return (
			<div>
				{ this.state.username } about last gist is
				<a target='_blank' href={this.state.lastGistUrl}>here</a>
			</div>
		)
	}
})

export default React.createClass({
	render (){
		return (
			<div>
				<UserGist source='https://api.github.com/users/octocat/gists' />
			</div>
		)
	}
})