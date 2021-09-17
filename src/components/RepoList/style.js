import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 20px auto;
`;

const Controls = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 960px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    display: table;
  }
`;

const SC = {
  ListContainer,
  Controls
};

export default SC;