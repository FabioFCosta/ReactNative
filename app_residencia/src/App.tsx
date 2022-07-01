import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoginProvider } from './context/LoginContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoginProvider>
        <CategoriaProvider>
        <CarrinhoProvider>
          <Routes />
        </CarrinhoProvider>
        </CategoriaProvider>
      </LoginProvider>
    </AutenticacaoProvider>
  );
}