import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import Button from '../Button/Button';
import loginPhoto from '../../images/learning.jpg';
import './_Login.scss';
import FormRedirectButton from '../Form/FormRedirectButton';
import FormInput from '../Form/FormInput';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="login-container">
      <div className="login-container-left">
        <img src={loginPhoto} className="login-container-image" />
      </div>
      <form method="POST" onSubmit={handleOnSubmit} className="login-container-right">
        <h2>Prisijungimas</h2>

        <FormInput
          placeholder="El. Paštas"
          type="text"
          icon={faEnvelope}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <FormInput
          placeholder="Slaptažodis"
          type="password"
          icon={faLock}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Button styling="form-button">Prisijungti</Button>

        <div className="forgot-logins-container">
          <span className="forgot-logins-container-text">Pamiršote</span>
          <Button styling="forgot-logins-container-link" href="/">
            prisijungimo varda ar slaptažodi?
          </Button>
        </div>

        <FormRedirectButton buttonText="Užsiregistruoti" redirectUrl="/registration" />
      </form>
    </div>
  );
};

export default Login;
