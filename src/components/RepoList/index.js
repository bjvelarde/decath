import React, { useEffect } from 'react';
import { useRepos } from '../../context';
import RepoItem from '../RepoItem';
import Navigation from '../Navigation';
import PerPage from '../PerPage';
import SortOptions from '../SortOptions';
import Filter from '../Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const RepoList = () => {
  const { state, fetchRepos } = useRepos();

  const renderItems = data => {
    if (data.length) {
      return data.map(i => <RepoItem item={i} key={i.id} />)
    }
    return 'No items found';
  };

  useEffect(() => {
    async function fetchData() {
      await fetchRepos({
        page: state.page,
        per_page: state.per_page,
        sortBy: state.sortBy,
        filter: state.filter,
        sortOrder: state.sortOrder
      });
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.page,
    state.per_page,
    state.sortBy,
    state.filter,
    state.sortOrder
  ]);

  return <SC.ListContainer>
    <SC.Controls>
      <PerPage />
      <SortOptions />
      <Filter />
    </SC.Controls>

    <Navigation />
    {state.data ? renderItems(state.data) : <FontAwesomeIcon icon={faYinYang} spin size="3x" color="#1a425e"/> }
    <Navigation />
  </SC.ListContainer>;
}

export default RepoList;