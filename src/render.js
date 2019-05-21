import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost,updatePostText} from "./state/state";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updatePostText={updatePostText}
                />
        </BrowserRouter>,
        document.getElementById('root')
    );
};


export default rerenderEntireTree;