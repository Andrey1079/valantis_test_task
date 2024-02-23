import { BASE_URL } from '../variables/variables';
import generatePassword from './generatePassword';

async function apiRequest(body) {
  const settingsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': generatePassword(),
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(BASE_URL, settingsObj);
    if (!response.ok) {
      throw new Error(response.statusText, response.status);
    }
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export default apiRequest;
