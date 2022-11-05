import { FC, useState } from 'react';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import loginPhoto from '../../images/learning.jpg';
import Button from '../Button/Button';
import FormInput from '../Form/FormInput';
import FormRedirectButton from '../Form/FormRedirectButton';

const Registration: FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleOnSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="login-container">
      <div className="login-container-left">
        <img src={loginPhoto} className="login-container-image" />
      </div>
      <form method="POST" onSubmit={handleOnSubmit} className="login-container-right">
        <h2>Registracija</h2>
        <FormInput
          placeholder="Vardas"
          type="text"
          value={name}
          icon={faUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <FormInput
          placeholder="Pavardė"
          type="text"
          value={lastName}
          icon={faUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <FormInput
          placeholder="El. Paštas"
          type="text"
          value={email}
          icon={faEnvelope}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <FormInput
          placeholder="Slaptažodis"
          type="password"
          value={password}
          icon={faLock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <FormInput
          placeholder="Pakartokite slaptažodį"
          type="password"
          value={passwordRepeat}
          icon={faLock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordRepeat(e.target.value)}
        />

        <Button styling="form-button">Registruotis</Button>

        <FormRedirectButton buttonText="Prisijungti" redirectUrl="/login" />
      </form>
    </div>
  );
};

export default Registration;
