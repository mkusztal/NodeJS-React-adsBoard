import { Row, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  return (
    <Row className="mx-auto m-3">
      <Form.Group className="mb-3 mr-3" controlId="formSearch">
        <Form.Control type="text" placeholder="Search..." />
      </Form.Group>

      <Button className="h-75">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </Row>
  );
};

export default SearchForm;
