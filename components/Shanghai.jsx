var SiliconValley = React.createClass({
   render: function() {
       return (
           <div className="location silicon-valley clearfix">
               <div className="text-wrapper">
                   <h2>硅谷</h2>
                   <p>创新的生活</p>
               </div>
           </div>
       );
   }
});

React.render(<SiliconValley />, document.getElementById('silicon-valley'));