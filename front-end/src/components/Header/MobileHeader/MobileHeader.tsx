import Button from '../../Button/Button';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './_MobileHeader.scss';

const MobileHeader: FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="mobile-header-container">
      <div className="mobile-header-button-wrapper">
        <Button styling="mobile-header-button" href="/">
          Pagrindinis
        </Button>
      </div>

      <div className="mobile-header-button-wrapper">
        <Button styling="mobile-header-button" href="/">
          Įkelti skelbimą
        </Button>
      </div>

      <div className="mobile-header-button-wrapper">
        <Button styling="mobile-header-button" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          Ieškoti darbo
          {isAccordionOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </Button>
        {isAccordionOpen && (
          <ul className="expanded-section-buttons-container">
            <li className="expanded-section-button">
              <Button styling="mobile-header-button" href="/">
                Ilgalaikis darbas
              </Button>
            </li>
            <li className="expanded-section-button">
              <Button styling="mobile-header-button" href="/">
                Trumpalaikis darbas
              </Button>
            </li>
          </ul>
        )}
      </div>

      <div className="mobile-header-button-wrapper">
        <Button styling="mobile-header-button" href="/login">
          Prisijungti
        </Button>
      </div>

      <div className="mobile-header-button-wrapper">
        <Button styling="mobile-header-button mobile-header-button--register" href="/registration">
          Registruotis
        </Button>
      </div>
    </div>
  );
};

export default MobileHeader;
