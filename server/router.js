const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
// const db = require('./db/index');

router.get('/spots', controller.getAllSpots);
router.post('/spots', controller.addNewSpot);
router.post('/users', controller.addNewUser);
router.post('/feedings', controller.newFeeding);

// router.post('/users', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const addNew = (user) => {
//       return db.insert(user).into('users').returning('*');
//     };
//     const newUser = await addNew({ name, email, password });
//     res.status(201);
//     res.send(newUser);
//   } catch (error) {
//     res.status(500);
//     console.error(error);
//   }
// });

module.exports = router;
