import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments"> 
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />  
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>  
          </div>
          <div className="text"></div>
        </div>    
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

// http://semantic-ui.com let's install it! 
// https://cdnjs.com/libraries/semantic-ui
// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css