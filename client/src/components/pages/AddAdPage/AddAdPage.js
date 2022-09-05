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
    const fd = new FormData();
    fd.append('title', ad.title);
    fd.append('username', ad.username);
    fd.append('description', ad.description);
    fd.append('date', ad.date);
    fd.append('image', ad.image);
    fd.append('price', ad.price);
    fd.append('location', ad.location);

    const options = {
      method: 'POST',
      body: fd,
    };

    fetch(`${API_URL}/ads`, options);
    dispatch(fetchAds);

    navigate('/');
  };
  return <AdForm action={handleSubmit} actionText="Add ad" />;
};

export default AddAdPage;
