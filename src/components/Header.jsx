const Header = (props) => {

  const { tasks } = props;

  return (
    <div className='mt-[2%] w-[36%] h-[25vh] border-4 border-rose-400 shadow-xl rounded-2xl flex justify-evenly text-center item-center p-4'>
        <div className='text-rose-100 '>
            <h1  className='text-3xl font-bold mt-4'>TODO-LISTS</h1>
            <p className='text-lg font-bold mt-2'>Keep doing Tasks</p>
          </div>
        <div>
          <div className="text-3xl font-extrabold flex justify-center items-center w-[8vmax] h-[8vmax] rounded-full bg-rose-600">
             {tasks.filter((t) => t.completed === true).length}/
             {tasks.length}
          </div>
        </div>
    </div>
  )
}

export default Header