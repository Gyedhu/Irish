import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyle from "./GlobalStyles";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdXPGqyGFb2UMiEWiP2AHP5bw64OJJ7kQ",
  authDomain: "irish-9f26a.firebaseapp.com",
  projectId: "irish-9f26a",
  storageBucket: "irish-9f26a.appspot.com",
  messagingSenderId: "89559048628",
  appId: "1:89559048628:web:4370986c9dbc001b76d2e1",
  measurementId: "G-3V0YS6LLPC",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
