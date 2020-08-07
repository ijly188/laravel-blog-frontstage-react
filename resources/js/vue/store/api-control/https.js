/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import router from '../../../routes';
import { tip } from './untils';

export const errorHandle = (data) => {
  switch (data) {
    // 錯誤碼
    case 401:
      console.log(1);
      // 套用 untils.js 傳回來的方法
      break;
    default:
  }
};
