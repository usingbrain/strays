const service = require('../services/service');

exports.getAllSpots = async (req, res) => {
  try {
    const spots = await service.getAllFeedingSpots();
    res.send(spots);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};

exports.addNewUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await service.addNewUser({ name, email, password });
    res.status(201);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};

exports.addNewStray = async (req, res) => {
  try {
    const { name, sex, colour } = req.body;
    const newStray = await service.addNewStray({ name, sex, colour });
    res.status(201);
    res.send(newStray);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};

exports.addNewSpot = async (req, res) => {
  try {
    const { lat, long } = req.body;
    const newSpot = await service.addNewFeedingSpot({ lat, long });
    res.status(201);
    res.send(newSpot);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};

exports.newFeeding = async (req, res) => {
  // try {
  // } catch (error) {
  //   res.status(500);
  //   console.error(error);
  // }
};
