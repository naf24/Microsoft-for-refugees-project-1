import './index.css'
import React from 'react';

import ExerciseTitle from './ExercisesTitle'
<ExerciseTitle title={ exercise.title } feedback={ exercise.feedback } />

import ExerciseList from './ExercisestList'

function App() {
    
const exercise = {
    title: 'Dont surprise',
    feedback: {
        rating: 4.8,
        reviews: 5
    },
    steps: [
        { name: 'stay straight, look forward', learned: true },
        { name: 'put your forefingers under your brows and fix them', learned: true },
        { name: 'try to raise your brows', learned: false },
        { name: 'hinder your brows from raising with your forefingers', learned: true },
        { name: 'count to 20', learned: true },
        { name: 'relax', learned: true },
    ],
};
    return (
        <article>
            <h1>Training Manager</h1>
           
<ExerciseTitle title={ exercise.title } />
            
<ExerciseList items={exercise.items} />
        </article>
    )
}

export default App;
