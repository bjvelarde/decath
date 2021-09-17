import styled from 'styled-components';

const ListItem = styled.div`
  display: inline-block;
  padding-left: 15px;
`;

const ItemBox = styled.div`
  background-color: aliceblue;
  border: 1px solid #dfdfdf;
  color: #191970;
  padding: 20px;
  text-align: left;
  margin: 5px 10px;
  border-radius: 20px;

  &:hover {
    box-shadow: 10px 5px 5px #cfcfcf;
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 960px;
    margin: 5px auto;
  }
`;

const ItemDescription = styled.div`
  background-color: #F8EAB8;
  padding: 15px 10px;
  border-radius: 10px;
`;

const Label = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  display: inline-block;
`;

const DetailsBox = styled.div`
  margin-top: 15px;
  padding: 15px 10px;
  border-top: 1px dashed #666;
`;

const Title = styled.h3`
  padding: 0 10px;

  > a {
    text-decoration: none;
  }
`;

const SC = {
  ListItem,
  ItemBox,
  ItemDescription,
  Label,
  DetailsBox,
  Title
};

export default SC;