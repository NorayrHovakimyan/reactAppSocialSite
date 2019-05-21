import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import store from './state/state';
import App from "./App";




let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);