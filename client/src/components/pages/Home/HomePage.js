import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1>All ads</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2">
          <Link to="/ads/addForm">
            <Button>Add ad</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
