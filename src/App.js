import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {auth, db} from "./firebase_config"
import Test from "./components/Test"
import Login from "./components/Login"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="test" element={<Test />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
