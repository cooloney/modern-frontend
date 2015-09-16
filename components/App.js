var React = require('react');
var Header = require('./Header.js');
var Changsha = require('./Changsha.js');
var Hangzhou = require('./Hangzhou.js');
var Shanghai = require('./Shanghai.js');
var SiliconValley = require('./SiliconValley.js');

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