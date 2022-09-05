import { Card, Row, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
//import { IMAGES_URL } from '../../../config';
import DeleteAd from '../../features/DeleteAd/DeleteAd';
import { getAdById, removeAdById } from '../../../redux/adsRedux';
import { useSelector, useDispatch } from 'react-redux';

const AdPage = () => {
  const { adId } = useParams();
  const adData = useSelector((state) => getAdById(state, adId));

  console.log('adData: ', adData);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeAdById(adId));
    handleClose();
  };

  if (showModal)
    return (
      <DeleteAd
        showModal={showModal}
        handleClose={handleClose}
        handleRemove={handleRemove}
      />
    );

  if (!adData) return <Navigate to="/" />;

  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} lg="5">
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
      </Col>
      <Col xs={12} lg="2">
        <Link to={'/ad/edit/' + adData._id}>
          <Button variant="outline-info" className="m-2">
            Edit
          </Button>{' '}
        </Link>
        <Button variant="outline-danger" onClick={handleShow}>
          Delete
        </Button>{' '}
      </Col>
    </Row>
  );
};

export default AdPage;
