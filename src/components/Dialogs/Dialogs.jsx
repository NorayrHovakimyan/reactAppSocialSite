import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(i=> <DialogItem id={i.id} name={i.name}/>);
    let messageElements = props.messagesData.map(i=> <Message text={i.text}/>);

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

