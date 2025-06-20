import React, { useState, useEffect } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';

import './App.css';

function App() {
    const [participants, setParticipants] = useState([]);
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [exercise, setExercise] = useState('');
    const [diet, setDiet] = useState('');
    const [goal, setGoal] = useState('');
    const [steps, setSteps] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (!name || !score || !exercise || !diet || !goal || !steps) {
            alert("Please fill all fields.");
            return;
        }
        const newParticipant = {
            name,
            score: Number(score),
            exercise,
            diet,
            goal,
            steps: Number(steps)
        };
        setParticipants(prev => [...prev, newParticipant]);
        setName('');
        setScore('');
        setExercise('');
        setDiet('');
        setGoal('');
        setSteps('');
    };

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}, [darkMode]);

return (
    <div className="App">
        <button onClick={() => setDarkMode(prev => !prev)}>
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <h1>Fitness Tracker</h1>
        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    float: 'right',
    marginBottom: '10px',
    background: darkMode ? '#333' : '#eee',
    color: darkMode ? '#f0f0f0' : '#333',
    border: '1px solid #ccc',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer'
  }}
>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>

<h1>Fitness Tracker</h1>

        <form onSubmit={handleAdd}>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Score" type="number" value={score} onChange={e => setScore(e.target.value)} />
            <input placeholder="Exercise" value={exercise} onChange={e => setExercise(e.target.value)} />
            <input placeholder="Diet Plan" value={diet} onChange={e => setDiet(e.target.value)} />
            <input placeholder="Goal" value={goal} onChange={e => setGoal(e.target.value)} />
            <input placeholder="Steps" type="number" value={steps} onChange={e => setSteps(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        <Leaderboard leaderboardData={participants} />
    </div>
);
}

export default App;
