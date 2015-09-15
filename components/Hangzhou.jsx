var Hangzhou = React.createClass({
    render: function() {
        return (
            <div className="location hangzhou clearfix">
                <div className="text-wrapper">
                    <h2>杭州</h2>
                    <p>求学之路</p>
                </div>
            </div>
        );
    }
});

React.render(<Hangzhou />, document.getElementById('hangzhou'));