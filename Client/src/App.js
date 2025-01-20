import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';
import useLocalStorage from './lib/useLocalStorage';
import Signup from './components/Signup';  // Import Signup component
import Login from './components/Login';    // Import Login component

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [completedAll, setCompletedAll] = useState(false);
  const [filter, setFilter] = useState("All");
  const [currentlyEditing, setCurrentlyEditing] = useState("");

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }



  function updateTodo(text, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      )
    );
  }

  function completeAll() {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !completedAll,
      }))
    );
    setCompletedAll(!completedAll);
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      name={name}
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="app-container bg-gradient-to-r from-green-400 to-blue-500 flex h-screen">
              <div className="m-auto bg-primary-600 p-6 rounded-lg text-white max-w-md w-full">
                <h2 className="text-white text-xl font-semibold mb-4">TO DO LIST</h2>
                <Form addTodo={addTodo} />
                <ul className="todos">
                  {todos
                    .filter(FILTER_MAP[filter])
                    .map(({ text, id, completed }) => (
                      <Todo
                        text={text}
                        id={id}
                        completed={completed}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        updateTodo={updateTodo}
                        isEditing={id === currentlyEditing}
                        setCurrentlyEditing={setCurrentlyEditing}
                      />
                    ))}
                </ul>

                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded"
                    onClick={completeAll}
                  >
                    Complete All
                  </button>
                </div>

                {/* Filter Buttons */}
                <div className={todos.length ? 'mt-4 flex justify-between' : 'hidden'}>
                  {filterList}
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
