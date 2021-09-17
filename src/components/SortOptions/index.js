import React from 'react';
import SortOrder from '../SortOrder';
import Form from 'react-bootstrap/Form';
import { useRepos } from '../../context';
import { debounce } from 'lodash';
import SC from './style';

const sortOptions = {
  full_name: 'Name',
  created: 'Date Created',
  updated: 'Date Updated',
  pushed: 'Date Pushed'
};

const SortOptions = () => {
  const { sortRepos } = useRepos();

  const debouncedHandler = debounce(e => sortRepos(e.target.value), 100);

  const handleChange=(e)=>{
    debouncedHandler(e);
  }
  const options = () => Object.keys(sortOptions).map((key) => {
    return <option value={key} key={key}>{sortOptions[key]}</option>
  });

  return (
    <SC.ControlBox>
      <Form.Label>Sort By</Form.Label>
      <SC.FormSelect defaultValue="full_name" title="Sort By" onChange={handleChange}>
        {options()}
      </SC.FormSelect>
      <SortOrder />
    </SC.ControlBox>
  );
};

export default SortOptions;