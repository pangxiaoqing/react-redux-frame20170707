import React from 'react';

var Blockp = React.createClass({
    render () {
        return (
            <div>
                <p>用户名：<span>{this.props.nameValue}</span></p>
                <p>密码：<span>{this.props.passValue}</span></p>
            </div>
        )
    }
});
export default Blockp;