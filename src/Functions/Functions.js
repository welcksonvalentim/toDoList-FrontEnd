import Axios from 'axios';
const API_ENDPOINT = 'http://localhost:3005/list';

export function createTask(add) {
  const result = Axios.post(API_ENDPOINT, add).then((resp) => {
    if(resp.status === 200) {
      return resp.data;
    } else if (resp.status === 404) {
      alert('Not Delete Task');
    }
  });
  return result;
};