import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAds } from '../../../redux/adsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AdBox from '../../features/AdBox/AdBox';
import { fetchAds } from '../../../redux/adsRedux';

const HomePage = () => {
  const ads = useSelector(getAds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col>
          <h1>All ads</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2">
          <Link to="/ad/addForm">
            <Button>Add ad</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {ads.map((ad) => (
          <Col key={ad._id}>
            <AdBox {...ad} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
