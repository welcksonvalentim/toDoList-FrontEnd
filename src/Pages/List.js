import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useListOfTask } from '../Context/Context';
import { excludeTask } from '../Functions/Functions';

const API_ENDPOINT = 'http://localhost:3005/list';

function List() {
  const [ loading, setLoading ] = useState(true);
  const [ data ] = useState([]);

  useEffect(() => {
    const search = () => {
    const result =  axios.get(API_ENDPOINT)
      .then(response => response.data);
    return result;
    }

    async function getList() {
      try {
        const list = await search();
        return list;
      } catch (err) {
        console.log(err);
        return [];
      }
    }

    getList().then(async (fcs) => {
    data.push(fcs);
    if(fcs.message) return alert('List is empty')
    setLoading(false)
    }, [data]);
  });

  const handleClick = async(numberId) => {
    await excludeTask(numberId);
  }
  /* const { listTask, setListTask } = useListOfTask();
  useEffect(() => { setListTask(listTask) },  [listTask, setListTask]); */

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='tasks'>
      <tr>
        <td>Number Task</td>
        <td>Description</td>
        <td>Status</td>
        <td>Date</td>
        <td>Priority</td>
      </tr>
      {data[0].map((task) => 
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>{task.date}</td>
          <td>{task.priority}</td>
          <td><button onClick={() => handleClick(task.id)}>Exclude</button></td>
        </tr>
      )}
    </main>
  );
}

export default List;
