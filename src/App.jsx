import React from 'react'
import MainRouter from '../../frontend/src/Router/MainRouter'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store"; 
const App = () => {
  return (
    <>
      <MainRouter/>
    </>
  )
}

export default App