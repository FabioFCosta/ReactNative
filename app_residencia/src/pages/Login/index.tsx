import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input, Text, Icon, Button } from 'react-native-elements';
import { AppLoader } from '../../components/AppLoader';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { LoginContext } from '../../context/LoginContext';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AutenticacaoContext);
  const { loginPending, setLoginPending } = useContext(LoginContext);

  useEffect(() => {
    setLoginPending(false);
  }, []);

  const handleLogin = async (email: string, senha: string) => {
    Keyboard.dismiss();
    setLoginPending(true)
    const respostaLogin = await login(email, senha);
    if (!respostaLogin) {
      setLoginPending(false)
      Alert.alert(
        "Erro",
        "",
        [
          { text: "OK" },
          { text: "Não foi possível realizar o login." },
        ]
      );
    } else {
      navigation.navigate('HomeScreen');
      setLoginPending(false)
    }
  }
  return (
    <>
      <DismissKeyboard>
        <View style={styles.container}>
          <Text style={styles.boasVindas}>{'Bem-vindo'}</Text>
          <Input
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
            leftIcon={<Icon name="user" color="#000" type="font-awesome" size={24} />}
          />
          <Input
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            leftIcon={<Icon name="key" color="#000" type="font-awesome" size={24} />}
            secureTextEntry
          />
          {loginPending ? null : <Button
            titleStyle={styles.tituloBotao}
            containerStyle={styles.containerBotao}
            buttonStyle={styles.styleBotao}
            title="Entrar"
            onPress={() => handleLogin(email, senha)}
          />}
        </View>
      </DismissKeyboard>
      {loginPending ? <AppLoader /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7054b6',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  boasVindas: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  tituloBotao: {
    color: '#7054b6',
  },
  styleBotao: {
    backgroundColor: '#fff'
  },
  containerBotao: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 15,
    width: 150
  }

})

export default Login;