import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let dialogsData = [
    {id:1,name:'Arsen'},
    {id:2,name:'Gevor'},
    {id:3,name:'Arman'},
    {id:4,name:'Suren'}
];

let messagesData = [
    {id:1,text:'Hi'},
    {id:2,text:'How'},
    {id:3,text:'Are'},
    {id:4,text:'You'},
    {id:5,text:'!!!'}
];


let postsData = [
    {id:1,message:'Hello It\'s',likesCount:12},
    {id:3,message:'My First',likesCount:8},
    {id:4,message:'^_^',likesCount:45},
    {id:5,message:'React App',likesCount:37}
];


ReactDOM.render(<App dialogsData={dialogsData}
                     messagesData={messagesData}
                     postsData={postsData}
/>, document.getElementById('root'));

