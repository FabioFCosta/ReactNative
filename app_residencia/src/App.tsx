import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoginProvider } from './context/LoginContext';
import { CategoriaProvider } from './context/CategoriaContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoginProvider>
        <CategoriaProvider>
          <Routes />
        </CategoriaProvider>
      </LoginProvider>
    </AutenticacaoProvider>
  );
}