import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { RadioButtons } from '../JobFormUtils';

const JobTypeSelection: React.FC = () => {
  const [radio, setRadio] = useState(RadioButtons.PERMANENT);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <label>Darbo tipas</label>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={radio}
        name="radio-buttons-group"
        row
        onChange={handleChange}
      >
        <FormControlLabel value={RadioButtons.PERMANENT} control={<Radio />} label="Nuolatinis darbas" />
        <FormControlLabel value={RadioButtons.SEASONAL} control={<Radio />} label="Sezoninis" />
        <FormControlLabel value={RadioButtons.TEMPORARY} control={<Radio />} label="Laikinas" />
      </RadioGroup>
    </FormControl>
  );
};

export default JobTypeSelection;
