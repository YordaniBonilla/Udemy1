import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App = () => {
  return (
     <div className="ui container comments">
       
       <CommentDetail 
       author="Sam" 
       timeAgo="Today at 4:45PM" 
       text="Nice Blog Post!"
       avatar={faker.image.avatar()}/>

       <CommentDetail 
       author="Alex" 
       timeAgo="Today at 2:00AM" 
       text="Nice Blog Post!"
       avatar={faker.image.avatar()}/> 

       <CommentDetail 
       author="Jane" 
       timeAgo="Yesterday at 5:00PM" 
       text="Nice Blog Post!"
       avatar={faker.image.avatar()}/> 


     </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


//when ever showing a component you need to show it with a jsx tag
//comment detail would be considered a child of index.js the main 