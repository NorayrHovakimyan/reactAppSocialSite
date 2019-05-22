import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'user1'},
                {id: 2, name: 'user2'},
                {id: 3, name: 'user3'},
                {id: 4, name: 'user4'}
            ],
            dialogMessages: [
                {id: 1, text: 'text1'},
                {id: 2, text: 'text2'},
                {id: 3, text: 'text3'},
                {id: 4, text: 'text4'}
            ],
            newDialogMessageText: 'default message'
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Message1', likesCount: 10},
                {id: 2, message: 'Message2', likesCount: 20},
                {id: 3, message: 'Message3', likesCount: 30},
                {id: 4, message: 'Message4', likesCount: 40}
            ],
            newPostText: 'learning react'
        }
    },
    _callSubscriber() {
        console.log('redux has been changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};


window.store = store;

export default store;