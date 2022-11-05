import { useContext } from 'react';
import Filters, { FiltersData } from '../Filters/Filters';
import { JobOffersContext, JobOffersProvider } from './JobsListContext';
import { ActionTypes } from './JobsListUtils';
import JobTeaser from './JobTeaser/JobTeaser';
import './_JobsList.scss';

const JobsList: React.FC = () => {
  const { state, dispatch } = useContext(JobOffersContext);
  console.log(dispatch);

  const handleOnSearch = (filtersData: FiltersData) => {
    dispatch({ type: ActionTypes.UPDATE_FILTERS_DATA, filtersData: filtersData });
  };

  return (
    <JobOffersProvider>
      <div className="jobs-list-container">
        <Filters handleOnSearch={handleOnSearch} />
        <div className="jobs-teasers-container">
          <JobTeaser />
          <JobTeaser />
          <JobTeaser />
        </div>
      </div>
    </JobOffersProvider>
  );
};

export default JobsList;
