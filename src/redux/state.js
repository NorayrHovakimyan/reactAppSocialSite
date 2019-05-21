const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


let store = {
    _state: {
        dialogsPage:{
            dialogsData: [
                {id:1,name:'user1'},
                {id:2,name:'user2'},
                {id:3,name:'user3'},
                {id:4,name:'user4'}
            ],
            dialogMessages: [
                {id:1,text:'text1'},
                {id:2,text:'text2'},
                {id:3,text:'text3'},
                {id:4,text:'text4'}
            ]
        },
        profilePage:{
            postsData: [
                {id:1,message:'Message1',likesCount:10},
                {id:2,message:'Message2',likesCount:20},
                {id:3,message:'Message3',likesCount:30},
                {id:4,message:'Message4',likesCount:40}
            ],
            newPostText:'learning react'
        }
    },
    _callSubscriber(){
        console.log('redux has been changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            // debugger;
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
};

window.store = store;

export default store;