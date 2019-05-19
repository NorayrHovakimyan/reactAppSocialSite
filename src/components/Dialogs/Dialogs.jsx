import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return(
        <div className={s.dialog +' '+s.active}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.text}
        </div>
    )
};


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
    {id:4,text:'You'}
];
let dialogElements = dialogsData.map(i=> <DialogItem id={i.id} name={i.name}/>);
let messageElements = messagesData.map(i=> <Message text={i.text}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};


export default Dialogs;

