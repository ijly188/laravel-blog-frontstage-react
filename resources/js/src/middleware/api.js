import axios from "axios";
import Qs from 'qs';

let url;
if (process.env.MIX_CLIENT_ENV === 'local') {
    url = process.env.MIX_CLIENT_API_LOCAL_DOMAINNAME;
}
if (process.env.MIX_CLIENT_ENV === 'uat') {
    url = process.env.MIX_CLIENT_API_UAT_DOMAINNAME;
}
if (process.env.MIX_CLIENT_ENV === 'production') {
    url = process.env.MIX_CLIENT_API_PRODUCTION_DOMAINNAME;
}

const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

// article
export const apiGetArticlelist = () => instance['get']('/api/articles-list');