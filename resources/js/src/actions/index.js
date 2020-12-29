import axios from 'axios';

export const FETCH_REQUEST_QUERY = 'fetch_request_query';

export const fetchRequestQuery = async (dispatch) => {
  // const { data } = await axios.get('https://httpbin.org/get');
  const { data } = await axios.get('http://reactlaraveldemo.test/api/articles-list');

  dispatch({
    type: FETCH_REQUEST_QUERY,
    payload: data,
  });
};