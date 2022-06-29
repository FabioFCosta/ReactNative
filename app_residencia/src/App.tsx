import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoginProvider } from './context/LoginContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoginProvider>
        <Routes />
      </LoginProvider>
    </AutenticacaoProvider>
  );
}