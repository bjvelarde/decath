import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useRepos } from '../../context';
import SC from './style';

const Navigation = () => {
  const { state: { pagination }, navigate } = useRepos();

  const getItems = () => {
    if (pagination && pagination.length) {
      return pagination.map((link) => {
        const clickHandler = () => {
          navigate(link.page);
        };
        switch (link.title) {
          case 'first':
            return <Pagination.First key={link.title} onClick={clickHandler} />;
          case 'prev':
            return <Pagination.Prev key={link.title} onClick={clickHandler} />;
          case 'next':
            return <Pagination.Next key={link.title} onClick={clickHandler} />;
          case 'last':
            return <Pagination.Last key={link.title} onClick={clickHandler} />;
          default: return '';
        };
      });
    }
    return [];
  };

  return <SC.Pagination>
    <Pagination title="pagination">{getItems()}</Pagination>
  </SC.Pagination>
};

export default Navigation;
