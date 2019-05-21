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
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state has been changed');
    },
    addPost(){
        // debugger;
        let newPost = {
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
    },
    updatePostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;