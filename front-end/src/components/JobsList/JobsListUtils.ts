import { FiltersData } from '../Filters/Filters';

export const JobTypes = {
  ALL_JOBS: 'all',
  FULL_TIME: 'fullTime',
  PART_TIME: 'partTime',
  SHORT_TERM: 'shortTerm',
};

export interface State {
  filtersData: FiltersData;
}

export const ActionTypes = {
  UPDATE_FILTERS_DATA: 'UPDATE_FILTERS_DATA',
};

export type JobOffersContextType = {
  state: State;
  UPDATE_FILTERS_DATA: (filtersData: FiltersData) => void;
};
