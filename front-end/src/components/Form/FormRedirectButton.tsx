import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

interface FormRedirectButtonProps {
  buttonText: string;
  redirectUrl: string;
}

const FormRedirectButton = ({ buttonText, redirectUrl }: FormRedirectButtonProps) => {
  return (
    <div className="registration-button-container">
      <Button href={redirectUrl}>{buttonText}</Button>
      <FontAwesomeIcon icon={faArrowRight} className="registration-button-icon" />
    </div>
  );
};

export default FormRedirectButton;
