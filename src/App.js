import RepoList from './components/RepoList';
import { Container, Row } from 'react-bootstrap';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <Container>
        <Row>
          <h1 className="App-header">Decathlon Repositories</h1>
        </Row>
        <Row>
          <RepoList />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
