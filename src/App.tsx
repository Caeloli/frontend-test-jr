import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserListContainer from './components/containers/UserListContainer';
import UserDetailsContainer from './components/containers/UserDetailsContainer';
import UserPostTodoToggleContainer from './components/containers/UserPostTodoToggleContainer';

function App() {

  return (
    <>
      <div className='min-h-screen pb-6 bg-gray-100'>
        <header className='w-full bg-white shadow-sm'>
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Basic User Management Dashboard</h1>
          </div>
        </header>
        {/* Main Content */}
          <UserListContainer />
          <UserDetailsContainer />
          <UserPostTodoToggleContainer />
      </div>
    </>
  );
}

export default App;
