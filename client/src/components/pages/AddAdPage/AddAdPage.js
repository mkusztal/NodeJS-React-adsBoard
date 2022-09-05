import AdForm from '../../features/AdForm/AdForm';
import { addAd, fetchAds } from '../../../redux/adsRedux';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';

const AddAdPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (ad) => {
    dispatch(addAd);
    const formData = new FormData();
    formData.append('title', ad.title);
    formData.append('username', ad.username);
    formData.append('description', ad.description);
    formData.append('date', ad.date);
    formData.append('image', ad.image);
    formData.append('price', ad.price);
    formData.append('location', ad.location);

    const options = {
      method: 'POST',
      body: formData,
    };

    fetch(`${API_URL}/ads`, options);
    dispatch(fetchAds);

    navigate('/');
  };
  return <AdForm action={handleSubmit} actionText="Add ad" />;
};

export default AddAdPage;
