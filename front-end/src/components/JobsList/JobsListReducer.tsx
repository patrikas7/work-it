import { FiltersData } from '../Filters/Filters';
import { ActionTypes, State } from './JobsListUtils';

interface JobOffersAction {
  type: string;
  filtersData: FiltersData;
}

const JobsListReducer = (state: State, action: JobOffersAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTERS_DATA:
      return {
        ...state,
        filtersData: action.filtersData,
      };
    default:
      return state;
  }
};

export default JobsListReducer;
