import { API_URL } from '../config';
import initialState from './initialState';
import shortid from 'shortid';

// selectors
export const getAds = ({ ads }) => ads;
export const getAdById = ({ ads }, adId) => ads.find((ad) => ad._id === adId);

// actions
const createActionName = (actionName) => `app/ads/${actionName}`;
const ADD_AD = createActionName('ADD_AD');
const UPDATE_AD = createActionName('UPDATE_AD');
const REMOVE_AD = createActionName('REMOVE_AD');
const SEARCH_AD = createActionName('SEARCH_AD');

// action creators
export const addAd = (payload) => ({ type: ADD_AD, payload });
export const updateAdById = (payload) => ({ type: UPDATE_AD, payload });
export const removeAdById = (id) => ({ type: REMOVE_AD, payload: { id } });
// const getAdBySearch = (searchPhrase) => ({
//   type: SEARCH_AD,
//   payload: { searchPhrase },
// });

export const fetchAds = () => {
  return (dispatch) => {
    fetch(`${API_URL}` + '/ads')
      .then((res) => res.json())
      .then((ads) => dispatch(updateAdById(ads)));
  };
};

const adsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_AD:
      return [...state, { ...action.payload, id: shortid() }];
    case UPDATE_AD:
      return [...action.payload];
    case REMOVE_AD:
      return state.filter((ad) => ad.id !== action.payload);
    case SEARCH_AD:
      return state.filter((ad) => ad.title.includes(action.payload));
    default:
      return state;
  }
};

export default adsReducer;
