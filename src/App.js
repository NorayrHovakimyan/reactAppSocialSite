import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  // debugger;
    console.log(props)
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=> <Dialogs dialogState={props.state.dialogsPage}/>
                }/>
                <Route path='/profile' render={()=> <Profile profileState={props.state.profilePage}/>
                }/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
