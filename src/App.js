import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {
  // debugger;
  //   console.log(props,'app')
  //   console.log(props.addPost,props.updatePostText);

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=> <Dialogs dialogState={props.state.dialogsPage}/>
                }/>
                <Route path='/profile' render={()=> <Profile profileState={props.state.profilePage}
                                                             addPost={props.addPost}
                                                             updatePostText={props.updatePostText}
                />
                }/>
            </div>
        </div>
    );
}

export default App;