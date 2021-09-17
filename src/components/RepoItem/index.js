import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const RepoItem = ({item}) => {
  return (
    <SC.ItemBox key={item.id} data-testid="list-item">
      <SC.Title><a href={item.html_url}>{item.name}</a></SC.Title>
      <SC.ItemDescription>{item.description}</SC.ItemDescription>
      <SC.DetailsBox>
        <Row>
          <Col>
            {item.language && <div>
              <SC.Label>Language</SC.Label>{item.language}
            </div>}
            <div><SC.Label>Type</SC.Label>{item.private ? 'Private' : 'Public'}</div>
            <div>
              <FontAwesomeIcon icon={faStar} /> {item.stargazers_count}
            </div>
            <div>
              <FontAwesomeIcon icon={faCodeBranch} /> {item.forks_count}
            </div>
          </Col>
          <Col>
            <div><SC.Label>Created At</SC.Label>{(new Date(item.created_at)).toLocaleString()}</div>
            <div><SC.Label>Updated At</SC.Label>{(new Date(item.updated_at)).toLocaleString()}</div>
            <div><SC.Label>Pushed At</SC.Label>{(new Date(item.pushed_at)).toLocaleString()}</div>
          </Col>
        </Row>
      </SC.DetailsBox>
    </SC.ItemBox>
  );
};

export default RepoItem;