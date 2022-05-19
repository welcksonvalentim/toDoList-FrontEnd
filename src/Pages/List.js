import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    if(fcs.message) return alert('Task already exist')
    setLoading(false)
    }, [data]);
  })

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='tasks'>
      <tr>
        <td>Description</td>
        <td>Status</td>
        <td>Date</td>
        <td>Priority</td>
      </tr>
      {data[0].map((task) => 
        <tr key={task.id}>
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>{task.date}</td>
          <td>{task.priority}</td>
        </tr>
      )}
    </main>
  );
}

export default List;
