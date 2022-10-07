import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Extrato } from './Pages/Extrato';
import { RecoilRoot } from 'recoil';
import { Doacao } from 'Pages/Doação';

export const AppRouter = () => {

  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path='/' element={<Extrato />} />
            <Route path='/doacao' element= {<Doacao/>} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
};