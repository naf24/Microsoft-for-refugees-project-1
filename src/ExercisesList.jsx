import './ExercisesList.css'
import React from 'react';

function ExercisesList(props) {
    // Create the list items using map
    const exerciseListItems = props.exercises.map((exercise, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} className={ exercise.learned ? 'learned' : '' }>
                { exercise.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { exerciseListItems }
        </ul>
    );
}

export default ExercisesList;