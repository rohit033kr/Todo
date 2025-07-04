import React from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './component/Todo';


export default function App(){
  return (
    <div className='bg-danger p-5 text-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Signup/>}/>
          <Route path="/signin" element ={<Signin/>}/>
          <Route path="/Todo" element ={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
