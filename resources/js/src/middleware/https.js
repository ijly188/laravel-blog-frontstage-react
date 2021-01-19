import axios from 'axios';
import { tip } from './untils';

export const errorHandle = (httpStatus, errorMsg) => {
	switch (httpStatus) {
		// 錯誤碼
		case 401:
			  // tip(httpStatus, errorMsg);
			// 套用 untils.js 傳回來的方法
			break;
		case 403:
			break;
		case 422:
			console.log(httpStatus, errorMsg)
			break;
		default:
	}
};