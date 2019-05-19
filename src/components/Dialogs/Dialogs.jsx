import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";





const DialogItem = (props) => {
    return(
        <div className={s.dialog +' '+s.active}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.text}
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Ando'/>
                <DialogItem id='2' name='Gago'/>
                <DialogItem id='3' name='Suro'/>
                <DialogItem id='4' name='Exo'/>
            </div>
            <div className={s.messages}>
                <Message text='Hi'/>
                <Message text='How'/>
                <Message text='Are'/>
                <Message text='You'/>
            </div>
        </div>
    )
};


export default Dialogs;

