import React from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherDisplay from './components/WeatherDisplay';
import Authentication from './components/Authentication';
import './App.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      <h1>Advanced To-Do Application</h1>
      <Authentication />
      {isAuthenticated && (
        <>
          <TaskInput />
          <TaskList />
          <WeatherDisplay city="New York" />
        </>
      )}
    </div>
  );
};

export default App;
