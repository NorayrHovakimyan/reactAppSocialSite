import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = props => {
    // debugger;

  let dialogElements = props.state.dialogsPage.dialogsData.map(i => <DialogItem id={i.id} name={i.name} />);

  let messageElements = props.state.dialogsPage.dialogMessages.map(i => <Message text={i.text} />);

  let newMessageText = props.state.dialogsPage.newDialogMessageText;

  let onSendMessageClick = () => {
      props.dispatch(sendMessageActionCreator());
  };
  let onNewMessageChange = (e) => {
      let newMessageText = e.target.value;
      props.dispatch(updateNewMessageTextActionCreator(newMessageText));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div className={s.txtAreaAndBtn}>
          <div className={s.textarea}>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageText}
              placeholder="Type your message.."
              name="messages"
              cols="30"
              rows="3"
            />
          </div>
          <div className={s.btn}>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
