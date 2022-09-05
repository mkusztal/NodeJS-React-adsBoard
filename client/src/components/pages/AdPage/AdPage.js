import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
//import { IMAGES_URL } from '../../../config';
import { getAdById } from '../../../redux/adsRedux';
import { useSelector } from 'react-redux';

const AdPage = () => {
  const { adId } = useParams();
  const adData = useSelector((state) => getAdById(state, adId));

  console.log('adData: ', adData);
  return (
    <Row className="d-flex justify-content-center">
      <Card>
        {/* <Card.Img variant="top" src={IMAGES_URL + adData.image} /> */}
        <Card.Body>
          <div>
            <Card.Title>{adData.title}</Card.Title>
            <Card.Text>Location: {adData.location}</Card.Text>
            <Card.Text>Price: {adData.price}$</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AdPage;
