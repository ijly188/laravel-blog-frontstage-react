import axios from "axios";
import Qs from 'qs';

let url;
const { token } = localStorage;

if (process.env.MIX_CLIENT_ENV === 'local') {
	url = process.env.MIX_CLIENT_API_LOCAL_DOMAINNAME;
}
if (process.env.MIX_CLIENT_ENV === 'uat') {
	url = process.env.MIX_CLIENT_API_UAT_DOMAINNAME;
}
if (process.env.MIX_CLIENT_ENV === 'production') {
	url = process.env.MIX_CLIENT_API_PRODUCTION_DOMAINNAME;
}

const apiDefaultWithoutToken = axios.create({
	baseURL: url,
	headers: { 'Content-Type': 'application/json' },
});

const apiDefaultWithToken = axios.create({
	baseURL: url,
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`,
		'content-type': 'application/x-www-form-urlencoded'
	},
});

export { apiDefaultWithoutToken, apiDefaultWithToken };