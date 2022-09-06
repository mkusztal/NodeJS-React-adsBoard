import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/userRedux';
import { useEffect } from 'react';
//import { useEffect } from 'react';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = {
    method: 'DELETE',
  };
  useEffect(() => {
    fetch(`${API_URL}/auth/logout`, options).then(() => {
      dispatch(logOut());
      navigate('/');
    }, dispatch);
  });

  return null;
};

export default Logout;
