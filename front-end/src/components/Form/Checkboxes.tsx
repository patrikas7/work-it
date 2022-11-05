import React from 'react';
import { FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxes {
  checkboxes: {
    name: string;
    value: string;
  }[];
  selectedCheckBoxes: string[];
  onChange: ((event: React.SyntheticEvent<Element, Event>, checked: boolean) => void) | undefined;
}

const Checkboxes: React.FC<CheckBoxes> = ({ checkboxes, selectedCheckBoxes, onChange }) => {
  return (
    <FormGroup>
      {checkboxes.map((checkbox, index) => (
        <FormControlLabel
          control={<Checkbox checked={selectedCheckBoxes.includes(checkbox.value)} />}
          label={checkbox.name}
          key={index}
          value={checkbox.value}
          onChange={onChange}
        />
      ))}
    </FormGroup>
  );
};

export default Checkboxes;
