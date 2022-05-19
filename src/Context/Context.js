import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();
export default function MyContextProvider({children}) {
  const [listTask, setListTask] = useState([]);
  return <Context.Provider value={{listTask, setListTask}}>
    {children}
  </Context.Provider>
}

export function useListOfTask() {
  const context = useContext(Context);
  const {listTask, setListTask} = context;
  return { listTask, setListTask };
}
