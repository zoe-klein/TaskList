import React from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;
    deleteTask(taskToDelete: string): void;
}


const ShowTask = ({task, deleteTask }: Props) => {
    return (
        <div className="item">
            <label className="container">
                <input type="checkbox" name="checkbox"/>
                <label className="item">
                    {task.taskName}
                </label>
            </label>

            <div id="delBtn" className="del-position">
                <button className="delBtn delBtn-1" onClick={() => {
                    deleteTask(task.taskName);
                }}> X </button>
            </div>
        </div>
    );
}

export default ShowTask;