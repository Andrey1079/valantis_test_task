import { API_PASSWORD } from '../variables/variables';
import CryptoJS from 'crypto-js';

const setFormat = (digit) => {
  return digit.toString().padStart(2, '0');
};

const generatePassword = () => {
  const date = new Date();
  const password =
    API_PASSWORD +
    date.getFullYear() +
    setFormat(date.getMonth() + 1) +
    setFormat(date.getDate());
  const token = CryptoJS.MD5(password).toString();
  return token;
};

export default generatePassword;
