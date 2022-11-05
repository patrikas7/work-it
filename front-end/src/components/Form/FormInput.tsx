import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEventHandler } from 'react';

interface FormInputProps {
  placeholder: string;
  type: string;
  icon?: any;
  styling?: {
    container?: string;
    input?: string;
    icon?: string;
  };
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormInput = ({ placeholder, type, icon, styling, value, onChange }: FormInputProps) => {
  return (
    <div className={styling?.container ? styling?.container : 'form-input-container'}>
      <input
        placeholder={placeholder}
        className={styling?.input ? styling?.input : 'form-input'}
        type={type}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <span className={styling?.icon ? styling?.icon : 'form-input-icon'}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </div>
  );
};

export default FormInput;
