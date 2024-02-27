import { BASE_URL } from '../variables/variables';
import generatePassword from '../helpers/generatePassword';

function apiRequest(body) {
  const settingsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': generatePassword(),
    },
    body: JSON.stringify(body),
  };
  return checkResponse(settingsObj, body);
}

async function checkResponse(settingsObj, body) {
  try {
    const response = await fetch(BASE_URL, settingsObj);
    if (!response.ok) {
      throw new Error('Ошибка!', response.statusText, response.status);
    } else {
      const data = response.json();
      return data;
    }
  } catch (err) {
    apiRequest(body);
  }
}
export default apiRequest;
