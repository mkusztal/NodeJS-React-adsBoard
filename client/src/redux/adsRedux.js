import { API_URL } from '../config';
import shortid from 'shortid';

// selectors
export const getAds = ({ ads }) => ads;
export const getAdById = ({ ads }, adId) => ads.find((ad) => ad._id === adId);

// actions
const createActionName = (actionName) => `app/ads/${actionName}`;
const ADD_AD = createActionName('ADD_AD');
const EDIT_AD = createActionName('EDIT_AD');
const UPDATE_AD = createActionName('UPDATE_AD');
const REMOVE_AD = createActionName('REMOVE_AD');

// action creators
const addAd = (payload) => ({ type: ADD_AD, payload });
const edit_ad = (payload) => ({ type: EDIT_AD, payload });
const updateAdById = (payload) => ({ type: UPDATE_AD, payload });
const removeAdById = (payload) => ({ type: REMOVE_AD, payload });

export const fetchData = () => {
  return (dispatch) => {
    fetch(API_URL + 'api/ads')
      .then((res) => res.json())
      .then((ad) => dispatch(updateAdById(ad)));
  };
};

const adsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_AD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_AD:
      return statePart.map((ad) =>
        ad.id === action.payload.id ? { ...ad, ...action.payload } : ad
      );
    case UPDATE_AD:
      return [...action.payload];
    case REMOVE_AD:
      return statePart.filter((ad) => ad.id !== action.payload);
    default:
      return statePart;
  }
};

export default adsReducer;
