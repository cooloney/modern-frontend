//var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <h2 className="clearfix">我的足迹</h2>
            </header>
        );
    }
});

React.render(<Header />, document.getElementById('header'));


