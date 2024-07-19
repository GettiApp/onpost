import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Onpost</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
