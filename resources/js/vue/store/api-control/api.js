/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Qs from 'qs';

const { token } = localStorage;
const url = process.env.MIX_CLIENT_API_DOMAINNAME;

// if no have token -> get token
const apiGetToken = axios.create({
  baseURL: url,
  headers: { Accept: 'application/json' },
});

// if has token -> use the token to location data
const apiDeafult = axios.create({
  baseURL: url,
  headers: { Accept: 'application/json', Authorization: `Bearer ${token}`, 'content-type': 'application/x-www-form-urlencoded' },
});

// post img
const apiPostImg = axios.create({
  // 解加密
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  baseURL: url,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});