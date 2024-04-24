import { useState } from 'react'

import Header from "./components/Header";
import Create from "./components/Create";
import Tasks from "./components/Tasks";

const App = () => {

  const [tasks, settasks] = useState([]);

  return (
    <div className='w-screen h-[100vh] overflow-x-hidden flex  items-center flex-col justify-center  bg-zinc-700  '>
      
      <Header tasks={tasks} />
      <Create tasks={tasks} settasks={settasks} />
      <Tasks tasks={tasks} settasks={settasks} />

    </div>
  )
}

export default App