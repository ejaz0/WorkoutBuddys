const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')
const router = express.Router();

//GET all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)


// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router;