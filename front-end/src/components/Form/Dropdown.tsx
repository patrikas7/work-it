import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface DropDownProps {
  styling?: string;
  label?: string;
  defaultValue: string;
  menuItems: string[];
  value: string;
  onChange: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined;
}

const DropDown: React.FC<DropDownProps> = ({ styling, label, defaultValue, menuItems, value, onChange }) => {
  return (
    <div className={styling ? styling : ''}>
      <FormControl fullWidth>
        {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label ? label : defaultValue}
          onChange={onChange}
        >
          <MenuItem value="">{defaultValue}</MenuItem>
          {menuItems.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
