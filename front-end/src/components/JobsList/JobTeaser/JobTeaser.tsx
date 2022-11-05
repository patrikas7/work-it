import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import photo from '../../../images/learning.jpg';
import './_JobTeaser.scss';
import Button from '../../Button/Button';

const JobTeaser: React.FC = () => {
  return (
    <div className="job-teaser-wrapper">
      <div className="job-photo-container">
        <img src={photo} className="job-teaser-photo" />
      </div>
      <div className="job-description-container">
        <div>
          <span className="company-name">UAB "Festo"</span>
          <h2 className="job-position-name">Junior programuotojas</h2>
        </div>
        <div className="job-details-wrapper">
          <div>
            <span className="job-detail">
              <FontAwesomeIcon icon={faCity} />
              Kaunas
            </span>
            <span className="job-detail">
              <FontAwesomeIcon icon={faMoneyBill} />
              2000$
            </span>
          </div>

          <Button styling="job-details-button" href="/">
            Daugiau
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobTeaser;
