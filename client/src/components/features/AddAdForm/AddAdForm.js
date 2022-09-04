import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAdForm = ({ action, actionText, ...props }) => {
  const newDate = new Date();
  let navigate = useNavigate();

  const id = props.id;
  const [title, setTitle] = useState(props.title || '');
  const [username, setUsername] = useState(props.username || '');
  const [description, setDescription] = useState(props.description || '');
  const [date, setDate] = useState(props.date || '');
  const [image, setImage] = useState(props.image || '');
  const [price, setPirce] = useState(props.price || '');
  const [location, setLocation] = useState(props.location || '');

  const handleSubmit = () => {
    action({
      id,
      title,
      username, // pobrac uzytkownika
      description,
      date: newDate,
      image,
      price,
      location,
    });
    navigate('/');
  };

  return (
    <Form className="col-12 col-sm-6 mx-auto" onSubmit={handleSubmit}>
      <h1 className="my-4">Add your ad</h1>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddAdForm;
