const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newDialogMessageText
            };
            state.dialogMessages.push(newMessage);
            state.newDialogMessageText = '';
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newDialogMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
};


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, newMessageText: message});

export default dialogReducer;