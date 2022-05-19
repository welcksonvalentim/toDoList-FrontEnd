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

      {data[0].map((task) => 
        <section className='sectiontasks' key={task.id}>
          <p>{`Description: ${task.description}`}</p>
          <h4>{`Status: ${task.status}`}</h4>
          <h4>{`Date: ${task.date}`}</h4>
          <h4>{`Priority: ${task.priority}`}</h4>
        </section>
      )}
    </main>
  );
}

export default List;
