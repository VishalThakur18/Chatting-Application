import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </Provider>
  </AuthContextProvider>
);