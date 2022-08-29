// import axios from 'axios';
// import { API_URL } from '../config';

export const getAds = ({ ads }) => ads.data;

const reducerName = 'ads';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ADS = createActionName('LOAD_ADS');

export const loadAds = (payload) => ({ payload, type: LOAD_ADS });

const initialState = {
  data: [],
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ADS:
      return { ...statePart, data: [...action.payload] };
    default:
      return statePart;
  }
}
