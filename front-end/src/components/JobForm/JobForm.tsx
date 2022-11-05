import { useState } from 'react';
import FormInput from '../Form/FormInput';
import JobTypeSelection from './JobTypeSelection/JobTypeSelection';
import './_JobForm.scss';

const JobForm: React.FC = () => {
  const [step, setStep] = useState('');
  const [name, setName] = useState('');
  const [desciption, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  return (
    <div className="job-form-container">
      <JobTypeSelection />
      <form className="job-form">
        <FormInput
          placeholder="Darbo pavadinimas"
          type="text"
          styling={{
            container: 'filters-input-wrapper',
            input: 'filters-input',
            icon: 'filters-input-icon',
          }}
          value={''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <FormInput
          placeholder="Darbo aprašymas"
          type="text"
          styling={{
            container: 'filters-input-wrapper',
            input: 'filters-input',
            icon: 'filters-input-icon',
          }}
          value={''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
        />

        <FormInput
          placeholder="Darbo aprašymas"
          type="text"
          styling={{
            container: 'filters-input-wrapper',
            input: 'filters-input',
            icon: 'filters-input-icon',
          }}
          value={''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
};

export default JobForm;
