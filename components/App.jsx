var React = require('react');
var Header = require('./Header.jsx');
var Changsha = require('./Changsha.jsx');
var Hangzhou = require('./Hangzhou.jsx');
var Shanghai = require('./Shanghai.jsx');
var SiliconValley = require('./SiliconValley.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="banner clearfix"></div>
                <div class="divider"></div>

                <Changsha />
                <div class="divider"></div>

                <Hangzhou />
                <div class="divider"></div>

                <Shanghai />
                <div class="divider"></div>

                <SiliconValley />
                <div class="divider"></div>

                <footer></footer>
            </div>
        );
    }
});

module.exports = App;