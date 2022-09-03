import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAds } from '../../../redux/adsRedux';
import { useSelector } from 'react-redux';

import AdBox from '../../features/AdBox/AdBox';
const HomePage = () => {
  const ads = useSelector(getAds);

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
        <Row>
          {ads.map((ad) => (
            <Col key={ad._id}>
              <AdBox {...ad} />
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
};

export default HomePage;
