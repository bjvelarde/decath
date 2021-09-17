import React from 'react';
import Form from 'react-bootstrap/Form';
import { useRepos } from '../../context';
import { debounce } from 'lodash';
import SC from './style';

const filterOptions = {
  all: 'All',
  public: 'Public',
  private: 'Private',
  forks: 'Forks',
  sources: 'Sources',
  member: 'Member',
  internal: 'Internal'
};

const Filter = () => {
  const { filterRepos } = useRepos();

  const debouncedHandler = debounce(e => filterRepos(e.target.value), 100);

  const handleChange=(e)=>{
    debouncedHandler(e);
  }

  const options = () => Object.keys(filterOptions).map((key) => {
    return <option value={key} key={key}>{filterOptions[key]}</option>;
  });

  return (
    <SC.ControlBox>
      <Form.Label>Filter By</Form.Label>
      <SC.FormSelect id="filter-by-dropdown" title="Filter By" onSelect={handleChange}>
        {options()}
      </SC.FormSelect>
    </SC.ControlBox>
  );
};

export default Filter;