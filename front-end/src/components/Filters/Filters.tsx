import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './_Filters.scss';
import FormInput from '../Form/FormInput';
import DropDown from '../Form/Dropdown';
import Checkboxes from '../Form/Checkboxes';
import { SelectChangeEvent, Slider, Stack } from '@mui/material';
import Button from '../Button/Button';
import { useState } from 'react';
import { JobTypes } from '../JobsList/JobsListUtils';

export interface FiltersData {
  searchTerm: string;
  city: string;
  area: string;
  jobTypes: string[];
  sallaryRange: number | number[];
}

interface FiltersProps {
  handleOnSearch: (filtersData: FiltersData) => void;
}

const Filters: React.FC<FiltersProps> = ({ handleOnSearch }) => {
  const dummyCity = ['Vilnius', 'Kaunas', 'Klaipėda'];
  const dummyArea = ['Informacinės technologijos', 'Apskaita', 'Pardavimai'];
  const dummyCheckboxes = [
    {
      name: 'Darbas pilnu etatu',
      value: JobTypes.FULL_TIME,
    },
    {
      name: 'Darbas puse etato',
      value: JobTypes.PART_TIME,
    },
    {
      name: 'Trumpalaikis darbas',
      value: JobTypes.SHORT_TERM,
    },
    {
      name: 'Visi darbai',
      value: JobTypes.ALL_JOBS,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [jobTypes, setJobType] = useState([JobTypes.ALL_JOBS]);
  const [sallaryRange, setSallaryRange] = useState<number | number[]>([50, 10000]);

  const onJobTypeChange = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const value = (e.target as HTMLInputElement).value;

    if (checked) {
      value === JobTypes.ALL_JOBS
        ? setJobType([JobTypes.ALL_JOBS])
        : setJobType([...jobTypes, value].filter((type) => type !== JobTypes.ALL_JOBS));

      return;
    }

    setJobType(jobTypes.filter((type) => type !== value));
  };

  return (
    <div className="filters-container">
      <h3>Filtrai</h3>
      <FormInput
        placeholder="Paieška.."
        type="text"
        icon={faSearch}
        styling={{
          container: 'filters-input-wrapper',
          input: 'filters-input',
          icon: 'filters-input-icon',
        }}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
      <DropDown
        styling="filters-input-wrapper"
        label="Miestas"
        defaultValue="Visi miestai"
        menuItems={dummyCity}
        value={city}
        onChange={(e: SelectChangeEvent) => setCity(e.target.value as string)}
      />
      <DropDown
        styling="filters-input-wrapper"
        label="Sritis"
        defaultValue="Visos sritis"
        menuItems={dummyArea}
        value={area}
        onChange={(e: SelectChangeEvent) => setArea(e.target.value as string)}
      />

      <div className="filters-input-wrapper">
        <Checkboxes checkboxes={dummyCheckboxes} selectedCheckBoxes={jobTypes} onChange={onJobTypeChange} />
      </div>

      <div className="filters-input-wrapper">
        <Stack spacing={2} direction="row" alignItems="center">
          <span className="slider-label">Min. alga</span>
          <Slider
            value={sallaryRange}
            valueLabelDisplay="auto"
            onChange={(event: Event, value: number | Array<number>, _) => setSallaryRange(value)}
            min={50}
            max={10000}
            step={50}
          />
          <span className="slider-label">Max. alga</span>
        </Stack>
      </div>

      <div className="filters-button-wrapper">
        <Button styling="filters-button" onClick={() => handleOnSearch({ searchTerm, city, area, jobTypes, sallaryRange })}>
          Ieškoti
        </Button>
      </div>
    </div>
  );
};

export default Filters;
