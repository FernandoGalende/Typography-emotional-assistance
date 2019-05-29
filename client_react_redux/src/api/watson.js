import axios from 'axios';

export const getWatsonEmotions = ({info}) => {
  const BASE_URL = process.env.REACT_APP_API_BASEURL;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
	const data = { info };

  return axios.post(`${BASE_URL}/watson`, data, headers)
};
