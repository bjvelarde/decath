import React from 'react';
import Form from 'react-bootstrap/Form';
import { useRepos } from '../../context';
import { debounce } from 'lodash';
import SC from './style';

const PerPage = () => {
  const { changePerPage } = useRepos();

  const debouncedChangeHandler = debounce(e => changePerPage(e.target.value), 300);

  const handleChange = (e) => {
    debouncedChangeHandler(e);
  };

  return (
    <SC.ControlBox>
      <Form.Group>
        <Form.Label>Per Page</Form.Label>
        <SC.FormInput
          type="number"
          title="Per Page"
          id="per_page"
          defaultValue="5"
          min="5"
          max="15"
          step="5"
          onChange={handleChange}
        />
      </Form.Group>
    </SC.ControlBox>
  );
};

export default PerPage;