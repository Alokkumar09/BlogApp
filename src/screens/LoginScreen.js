import {View, Text, Button} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  // Arrow Function
  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };
  const navigateToForgot = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateToRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={{margin: 10}}>
      <Text>LoginScreen</Text>
      <Button
        onPress={navigateToDashboard}
        title="Go To Dashboard"
        color="#841584"
      />
      <Button
        title="Go To Forgot password"
        color="#1f1f"
        onPress={navigateToForgot}
      />
      <Button
        title="Go to Register"
        color="pink"
        onPress={navigateToRegister}
      />
    </View>
  );
};

export default LoginScreen;
