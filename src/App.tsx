import React, { FC, ChangeEvent, useState } from 'react'; //FC is functional component
import './App.css';
import {ITask} from './interfaces';
import ShowTask from './Components/ShowTask';
import Modal from './Components/Modal'

//this code gets inserted in the index.tsx file
const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = {taskName: task};

    if (!task.trim()) {
      //alert("Um, it's empty...");
      setIsModalOpen(true);
    } else {
      setList([...list, newTask]);
      console.log(list);
    }
    setTask("");
  };

  const deleteTask = (taskToDelete: string): void => {
    setList(list.filter((task) => {
      return task.taskName !== taskToDelete
    }))
  }

  return (
    <div>
      <div className="box heading" id="container">
        <h1>Task List</h1> 
      </div> {/* end heading div */}

      <div className="box" id="container">
        <div id="myTasks">
          {list.map((task: ITask, key: number) => {
            return <ShowTask key={key} task={task} deleteTask={deleteTask}/>;
          })}
        </div> {/* end added Items div */}

        <div className="item">
          <input type="text" id="input" name="task" value={task} placeholder="Add Task..." onChange={handleChange}/>
          <button type="submit" className="addBtn addBtn-1" onClick={addTask}> + </button>
        </div> {/* end input and button div */}
      </div>

      {isModalOpen && <Modal closeModal={setIsModalOpen}/>}
      
    </div> //end BIG Div
  );
}

export default App;
