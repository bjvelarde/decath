import { useContext } from 'react';
import createDataContext from './createDataContext'
import fetchReposApi from '../api/fetchRepos';

const ACTIONS = {
  FETCH: 'fetch',
  SORT: 'sort',
  FILTER: 'filter',
  NAVIGATE: 'navigate',
  CHANGE_PER_PAGE: 'change-per-page',
  CHANGE_SORT_ORDER: 'change-sort-order',
};

// function* IdGenerator() {
//   let index = 11;

//   while (true) {
//     yield index++;
//   }
// }

// const generateId = IdGenerator();

export const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH:
      return {...state, ...action.payload};
    case ACTIONS.FILTER:
      return {...state, filter: action.payload};
    case ACTIONS.SORT:
      return {...state, sortBy: action.payload};
    case ACTIONS.NAVIGATE:
      return {...state, page: action.payload};
    case ACTIONS.CHANGE_PER_PAGE:
      return {...state, per_page: action.payload};
    case ACTIONS.CHANGE_SORT_ORDER:
      return {...state, sortOrder: action.payload};
    default: return state;
  }
}

const filterRepos = dispatch => filter => {
  dispatch({ type: ACTIONS.FILTER, payload: filter })
}

const fetchRepos = dispatch => async (params) => {
  const { pagination, data } = await fetchReposApi(params);
  dispatch({ type: ACTIONS.FETCH, payload: {data, pagination } })
}

const sortRepos = dispatch => sortBy => {
  dispatch({ type: ACTIONS.SORT, payload: sortBy })
}

const navigate = dispatch => page => {
  dispatch({ type: ACTIONS.NAVIGATE, payload: page })
}

const changePerPage = dispatch => limit => {
  dispatch({ type: ACTIONS.CHANGE_PER_PAGE, payload: limit })
}

const changeSortOrder = dispatch => order => {
  dispatch({ type: ACTIONS.CHANGE_SORT_ORDER, payload: order })
}

export const {Context, Provider} = createDataContext(
  todoReducer,
  {
    fetchRepos,
    filterRepos,
    sortRepos,
    navigate,
    changePerPage,
    changeSortOrder
  },
  []
);

export const useRepos = () => {
  const {
    state,
    fetchRepos,
    filterRepos,
    sortRepos,
    navigate,
    changePerPage,
    changeSortOrder
  } = useContext(Context);

  return {
    state,
    fetchRepos,
    filterRepos,
    sortRepos,
    navigate,
    changePerPage,
    changeSortOrder
  };
};