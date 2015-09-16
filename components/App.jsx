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

React.render(<App />, document.getElementById('app'));