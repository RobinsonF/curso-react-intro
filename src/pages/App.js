import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { NewTodo } from './new';
import { EditTodo } from './edit';
import { NotFound } from './not-found';

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/new' element={<NewTodo></NewTodo>}/>
        <Route path='/edit/:id' element={<EditTodo></EditTodo>}/>
        <Route path='/*' element={<NotFound></NotFound>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export {App};
