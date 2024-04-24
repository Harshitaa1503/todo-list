import {useState} from 'react'

const Create = (props) => {

    const {tasks, settasks} = props;

    const [title, settitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        settasks([...tasks, { title: title, completed: false }]);
        settitle("");
    };

  return (
    <form onSubmit={TaskSubmitHandler} className="w-[35%] flex justify-between px-5 my-[2%]">
    <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        placeholder="write your next task..."
        className=" p-2 mt-2 text-rose-100 outline-none h-[3.5vw] w-[80%] rounded-xl bg-zinc-500 "
        type="text"/>
    <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-rose-500">
        <i className="ri-add-fill"></i>
    </button>
</form>
  )
}

export default Create