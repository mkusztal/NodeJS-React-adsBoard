import { API_URL } from '../config';
import shortid from 'shortid';

// selectors
export const getAds = ({ ads }) => ads;
export const getAd = ({ ads }, adId) => ads.find((ad) => ad._id === adId);

// actions
const createActionName = (actionName) => `app/ads/${actionName}`;
const ADD_AD = createActionName('ADD_AD');
const UPDATE_AD = createActionName('UPDATE_AD');
const REMOVE_AD = createActionName('REMOVE_AD');
const SEARCH_AD = createActionName('SEARCH_AD');

// action creators
// const getAllAds = (ads) => ({ type: GET_ADS, payload: ads });
// const getAdById = (id) => ({ type: GET_AD, payload: id });
// const addAd = (payload) => ({ type: ADD_AD, payload });
const updateAdById = (payload) => ({ type: UPDATE_AD, payload });
// const removeAdById = (id) => ({ type: REMOVE_AD, payload: { id } });
// const getAdBySearch = (searchPhrase) => ({
//   type: SEARCH_AD,
//   payload: { searchPhrase },
// });

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
    case UPDATE_AD:
      return statePart.map((ad) =>
        ad.id === action.payload.id ? { ...ad, ...action.payload } : ad
      );
    case REMOVE_AD:
      return statePart.filter((ad) => ad.id !== action.payload);
    case SEARCH_AD:
      return statePart.filter((ad) => ad.title.includes(action.payload));
    default:
      return statePart;
  }
};

export default adsReducer;
