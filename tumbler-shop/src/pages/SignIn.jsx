import React from 'react';
import signInToTumblerImage from './assets/signin-to-tumbler.png';
import kakaoLoginButtonImage from './assets/kakao-login-button.png';

const LoginScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src={signInToTumblerImage} alt="Sign in to tumbler" style={{ marginBottom: '20px' }} />
      <img src={kakaoLoginButtonImage} alt="Kakao Login" style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default LoginScreen;