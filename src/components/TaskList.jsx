import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
          <span>{task.text}</span>
          <button onClick={() => dispatch(deleteTask(task.id))} className='taskBtn'>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
