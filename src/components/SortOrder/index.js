import React from 'react';
import { useRepos } from '../../context';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const SortOrder = () => {
  const { state, changeSortOrder } = useRepos();

  const debouncedClickHandler = debounce(e => changeSortOrder(e.target.ariaLabel === 'asc' ? 'desc' : 'asc'), 100);

  const handleClick = (e) => {
    debouncedClickHandler(e);
  };

  const ariaLabel = state.sortOrder || 'asc';

  return <SC.Btn title="Sorting Order" variant="outline-secondary" onClick={handleClick} aria-label={ariaLabel}>
    <FontAwesomeIcon icon={ariaLabel === 'asc' ? faCaretUp : faCaretDown} />
  </SC.Btn>;
};

export default SortOrder;