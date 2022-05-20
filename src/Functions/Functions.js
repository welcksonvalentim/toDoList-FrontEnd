import Axios from 'axios';
const API_ENDPOINT = 'https://to-do-list-welckson.herokuapp.com/list';

export function createTask(add) {
  const result = Axios.post(API_ENDPOINT, add).then((resp) => {
    if(resp.status === 200) {
      return resp.data;
    } else if (resp.status === 404) {
      alert('Not Create Task');
    }
  });
  return result;
};

export function excludeTask(numberId) {
  const objectId = {id: numberId};
  const result = Axios.delete(API_ENDPOINT, objectId ).then((resp) => {
    if(resp.status === 200) {
      return resp.data;
    } else if (resp.status === 404) {
      alert('Not Delete Task');
    }
  });
  return result;
};
