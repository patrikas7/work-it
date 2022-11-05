import { FC } from 'react';
import Header from '../components/Header/Header';
import Registration from '../components/Registration/Registration';

const RegistrationPage: FC = () => {
  return (
    <div className="gradient-background">
      <Header />
      <Registration />
    </div>
  );
};

export default RegistrationPage;
