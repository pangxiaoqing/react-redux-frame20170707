import React from 'react'

/*【父组件】向【子组件】传值；
【子组件】向【父组件】传值；
没有任何嵌套关系的组件之间传值（PS：比如：兄弟组件之间传值）*/
/*--------------------------------------------------------------------------------------------------------------------------*/
/*// 父组件
export default React.createClass({
	getInitialState: function() {
		return {
			checked: true
		};
	},
	render: function() {
		return (
			<ToggleButton text="Toggle me" checked={this.state.checked} />
		);
	}
});

// 子组件
var ToggleButton = React.createClass({
	render: function() {
		// 从【父组件】获取的值
		var checked = this.props.checked,
			text = this.props.text;

		return (
			<label>{text}: <input type="checkbox" checked={checked} /></label> //页面最后真实显示
		);
	}
});*/

/*-----------------------减少组件的层次，体现props的优势-------------------------------------*/
/*// 父组件
export default React.createClass({
	render: function() {
		return (
			<Intermediate text="where you are?" />
		)
	}
});
// 子组件1：中间嵌套的组件
var Intermediate = React.createClass({
	render: function() {
		return (
			<Child text={this.props.text} />
		)
	}
});
// 子组件2：子组件1的子组件
var Child = React.createClass({
	render: function() {
		return (
			<span>{this.props.text}</span>
		)
	}
});*/
/*---------------------子组件向父组件传值，子组件控制自己的state告诉父组件的点击状态，然后在父组件中展示出来，添加一个change事件来做交互---------------------*/
//父组件
/*export default React.createClass({
		getInitialState: function() {
			return {
				checked: false
			};
		},
		onChildChanged: function(newState) {
			this.setState({
				checked: newState
			});
		},
		render: function() {
			var isChecked = this.state.checked ? 'yes' : 'no';
			return (
				<div>
				<h5>Are you checked:{isChecked}</h5>
		<ToggleButton text="Toggle me" initialChecked={this.state.checked} callbackParent={this.onChildChanged} />
			</div>
			)
		}
	})
	// 子组件
var ToggleButton = React.createClass({
	getInitialState: function() {
		return {
			checked: this.props.initialChecked
		};
	},
	onTextChange: function() {
		var newState = !this.state.checked;
		this.setState({
			checked: newState
		});
		// 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
		this.props.callbackParent(newState);
	},
	render: function() {
		// 从【父组件】获取的值
		var text = this.props.text;
		// 组件自身的状态数据
		var checked = this.state.checked;

		return (
			<label>{text}: <input type="checkbox" checked={checked}                 onChange={this.onTextChange} /></label>
		);
	}
});*/

/*-----------------------------------------多个子组件使用同一个回调的情况---------------------------------------------*/
// 父组件
var MyContainer = React.createClass({
  getInitialState: function () {
    return {
      totalChecked: 0
    };
  },
  onChildChanged: function (newState) {
    var newToral = this.state.totalChecked
      + (newState ? 1 : -1);
    this.setState({
      totalChecked: newToral
    });
  },
  render: function() {
    var totalChecked = this.state.totalChecked;
    return (
      <div>
        <div>How many are checked: {totalChecked}</div>
        <ToggleButton text="Toggle me"
          initialChecked={this.state.checked}
          callbackParent={this.onChildChanged}
          />
        <ToggleButton text="Toggle me too"
            initialChecked={this.state.checked}
            callbackParent={this.onChildChanged}
          />
        <ToggleButton text="And me"
          initialChecked={this.state.checked}
          callbackParent={this.onChildChanged}
          />
      </div>
    );
  }
});

// 子组件
var ToggleButton = React.createClass({
  getInitialState: function () {
    return {
      checked: this.props.initialChecked
    };
  },
  onTextChange: function () {
    var newState = !this.state.checked;
    this.setState({
      checked: newState
    });
    // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
    this.props.callbackParent(newState);
  },
  render: function () {
    // 从【父组件】获取的值
    var text = this.props.text;
    // 组件自身的状态数据
    var checked = this.state.checked;

    return (
        <label>{text}: <input type="checkbox" checked={checked} onChange={this.onTextChange} /></label>
    );
  }
});