import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const ControlBox = styled.div`
  float: left;
  padding: 5px 15px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

const FormInput = styled(Form.Control)`
  display: inline-block;
  width: auto;
  margin-left: 5px;
`;

const SC = {
  ControlBox,
  FormInput
};

export default SC;