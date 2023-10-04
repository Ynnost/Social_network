import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// export type PostType = {
//     id:string,
//     img:string,
//     message:string,
//     likesCount:number
// }
//
// export type DialogsType = {
//     id:string,
//     name:string,
//     to:string,
// }
//
// export type MessagesType = {
//     id:string,
//     message:string,
// }
//
// export type DataType = {
//     post:PostType[],
//     dialogs:DialogsType[],
//     message:MessagesType[]
// }

 let postData = [
    {id:'1', img:'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-88.jpg', message:'Hi, how are you?', likesCount:12},
    {id:'2', img:'https://kartinkof.club/uploads/posts/2022-06/1655389713_47-kartinkof-club-p-kartinki-s-dnem-samogonshchika-47.jpg', message:'Is`s my first post', likesCount:11},
]

 let dialogsData = [
    {id:'1', name:'Denis Yunin', to:"/dialogs/1"},
    {id:'2', name:'Pavel Aladkin', to:"/dialogs/2"},
    {id:'3', name:'Micha Koldune', to:"/dialogs/3"},
    {id:'4', name:'Maria Shah', to:"/dialogs/4"},
    {id:'5', name:'Irisha Yunina', to:"/dialogs/5"},
]
 let messagesData = [
    {id:'1', message:'Hi'},
    {id:'2', message:'How are you?'},
    {id:'3', message:'Yo'},
    {id:'4', message:'Yo'},
    {id:'5', message:'What?'},
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <App post={postData} dialogs={dialogsData} message={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
