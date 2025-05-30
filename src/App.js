// App.js
import React, { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyOtp from './pages/VerifyOtp';
import ProfileInfo from './pages/ProfileInfo';
import Interests from './pages/Interests';

function App() {
  const [step, setStep] = useState('login');
  const [phone, setPhone] = useState('');

  const goTo = (newStep) => setStep(newStep);

  return (
    <div className="app">
      {step === 'login' && <Login onNext={() => goTo('signup')} />}
      {step === 'signup' && <Signup onNext={(p) => { setPhone(p); goTo('otp'); }} onBack={() => goTo('login')} />}
      {step === 'otp' && <VerifyOtp phone={phone} onNext={() => goTo('profile')} onBack={() => goTo('signup')} />}
      {step === 'profile' && <ProfileInfo onNext={() => goTo('interests')} onBack={() => goTo('otp')} />}
      {step === 'interests' && <Interests onBack={() => goTo('profile')} />}
    </div>
  );
}

export default App;