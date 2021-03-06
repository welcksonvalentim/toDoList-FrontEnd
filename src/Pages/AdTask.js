import React, { useState } from 'react';
import { createTask } from '../Functions/Functions';

function AdTask() {

  const [add, setAdd] = useState({ description: '', status: '', priority: ''});

  const handleClick = async(event) => {
    event.preventDefault();
    await createTask(add);
  };

  return (
    <main>
      <form className='addTask' onSubmit={ (event) => handleClick(event) }>
          <label htmlFor='Description'>
            <h4>Description</h4>
            <input type='text' placeholder='Input Description' required 
              onChange={(event) => setAdd({...add, description: event.target.value})}
            />
          </label>
          <label htmlFor='Status'>
            <h4>Status</h4>
            <input type='text' placeholder='Input Status' required
              onChange={(event) => setAdd({...add, status: event.target.value})}
            />
          </label>
          <label htmlFor='Priority'>
            <h4>Priority</h4>
            <input type='text' placeholder='Input Priority' required
              onChange={(event) => setAdd({...add, priority: event.target.value})}
            />
          </label>
          <label htmlFor='button'>
            <input className='buttonAdd' type='submit' name='button' value='Add Task' required/>
          </label>
        </form>
    </main>
  );
}

export default AdTask;
