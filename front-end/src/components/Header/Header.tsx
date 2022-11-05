import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronDown, faChevronUp, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './_Header.scss';
import Button from '../Button/Button';
import { useState, FC } from 'react';
import MobileHeader from './MobileHeader/MobileHeader';

const Header: FC = () => {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logo-wrapper">
          <Button href="/" styling="header-logo">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="logo-wrapper__header">work-it</span>
          </Button>

          <ul className="navigation-wrapper">
            <li className="navigation-wrapper-item">
              <Button styling="header-button" href="/">
                Pagrindinis
              </Button>
            </li>
            <li className="navigation-wrapper-item">
              <Button styling="header-button" href="/jobs/create">
                Įkelti skelbimą
              </Button>
            </li>
            <li className="navigation-wrapper-item">
              <Button styling="header-button" onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}>
                Ieškoti darbo
                {isFloatingMenuOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </Button>

              {isFloatingMenuOpen && (
                <ul className="header-floating-list">
                  <li className="header-floating-list-item">
                    <Button styling="header-floating-list-button" href="/">
                      Ilgalaikis darbas
                    </Button>
                  </li>
                  <li className="header-floating-list-item">
                    <Button styling="header-floating-list-button" href="/">
                      Trumpalaikis darbas
                    </Button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="header-buttons-wrapper">
          <Button styling="header-button" href="/login">
            Prisijungti
          </Button>

          <Button styling="header-button header-button--register" href="/registration">
            Registruotis
          </Button>

          {isMobileMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className="header-button--menu" onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="header-button--menu" onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>
      </div>
      {isMobileMenuOpen && <MobileHeader />}
    </>
  );
};

export default Header;
