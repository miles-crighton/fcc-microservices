const express = require('express');
const router = express.Router();

const users = {};

router.post('/new-user', (req, res) => {
    const username = req.body.username

    console.log(`Requesting creation of user: ${username}`);

    if (username) {
        if (!(username in users)) {
            users[username] = { exercises: [] }
            res.send({ message: 'Successfully created new user' });
        } else {
            res.send({ message: 'User already exists' });
        }
    } else {
        res.send({ message: 'No username found in request' });
    }
});

router.post('/add', (req, res) => {
    const userId = req.body.userId;
    const description = req.body.description || ' ';
    const duration = req.body.duration;
    const date = req.body.date;

    if (userId && duration && date) {
        if (userId in users) {
            exercise = { date, description, duration };
            users[userId]['exercises'].push(exercise);
            console.log(`Added exercise to ${userId}: ${exercise}`);
            res.send({ message: 'Successfully added exercise' });
        } else {
            res.send({ error: 'User not found'})
        }
    } else {
        res.send({ error: 'Missing exercise data, unable to store' });
    }
    console.log(users)
});

router.get('/log', (req, res) => {
    const userID = req.query["userId"];
    const from = req.query["from"];
    const to = req.query["to"];
    const limit = req.query["limit"];

    if (userID && userID in users) {
        let exercises = users[userID]['exercises'];

        if (from && to) {
            const fromDate = new Date(from);
            const toDate = new Date(to);
            exercises = exercises.filter(exercise => {
                const exerciseDate = new Date(exercise.date)
                return fromDate < exerciseDate && exerciseDate < toDate
            })
        }
        if (limit) {
            const totalExercises = limit > exercises.length ? exercises.length : limit
            exercises = exercises.slice(0, totalExercises);
        }

        console.log(`Sending list of ${Object.keys(exercises).length} exercises`)
        res.send({ exercises })
    } else {
        res.send({ error: `Unable to retrieve user data for specified userId`})
    }
});

module.exports = router