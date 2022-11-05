import React, { createContext, useReducer } from 'react';
import JobsListReducer from './JobsListReducer';
import { JobTypes, State } from './JobsListUtils';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  filtersData: {
    city: '',
    searchTerm: '',
    area: '',
    jobTypes: [JobTypes.ALL_JOBS],
    sallaryRange: [10, 100000],
  },
};

const JobOffersContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const JobOffersProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(JobsListReducer, initialState);

  return <JobOffersContext.Provider value={{ state, dispatch }}>{props.children}</JobOffersContext.Provider>;
};

export { JobOffersContext, JobOffersProvider };
