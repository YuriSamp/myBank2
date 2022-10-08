import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Extrato } from './Pages/Extrato';
import { RecoilRoot } from 'recoil';
import { Doacao } from 'Pages/Doação';
import { Emprestimos } from 'Pages/Emprestimos';
import { Credit } from 'Pages/Credit';

export const AppRouter = () => {

  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path='/' element={<Extrato />} />
            <Route path='/doacao' element= {<Doacao/>} />
            <Route path='/emprestimos' element= {<Emprestimos/>} />
            <Route path='/cartoes' element= {<Credit/>} />
            {/* <Route path='/cartoes' element= {<Credit/>} /> */}
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
};