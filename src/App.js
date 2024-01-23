import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Menus from './component/Menu/Menus';
import RightSide from './component/RightSide/RightSide';
import LeftSide from './component/LeftSide/LeftSide';


function App() {
  return (
    <Container fluid>
      <Row>
        <Menus />
      </Row>
      <Row>
        <Col>
          <LeftSide />
        </Col>
        <Col>
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
