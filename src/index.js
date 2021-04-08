import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello.js'; // you can even write './Hello'..cause it will understand that its js by default.
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from "./containers/App";


ReactDOM.render(
  <React.StrictMode>
    <div>
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
// things you could add to the "ReactDOM.render":-
// 1. <Hello welcoming={"Hi " + "my name is " + "sexy " + "linda"} addition={5 + 18}/>
// 2. <App />
// "welcoming" is a property that you have created of "Hello" and you can give it any values, now you can simply 
//  call the property whereever you need it. 
// <App /> is a jsx
// when u say import hi from "./hi.css".."./" means the file is in the same directory from which you are taking the data...
// hi.css means a file from which u r taking the data...and if u dont write the file type it automatically considers it to be js.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// hello