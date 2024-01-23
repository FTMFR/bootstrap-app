import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './component/Menus/Menu';


function App() {
  return (
    <Container fluid>
      <Row>
        <Menu />
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
