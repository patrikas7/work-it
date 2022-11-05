import { FC } from 'react';
import Header from '../components/Header/Header';
import JobsList from '../components/JobsList/JobsList';

const Home: FC = () => {
  return (
    <>
      <Header />
      <JobsList />
    </>
  );
};

export default Home;
