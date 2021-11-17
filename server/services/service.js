const db = require('../db/index');

exports.addNewUser = (user) => {
  return db.insert(user).into('users').returning('*');
};

exports.getAllFeedingSpots = () => {
  return db.select('*').from('spots');
};
exports.getAllStrays = () => {
  return db.select('*').from('strays');
};

exports.addNewFeedingSpot = (spot) => {
  return db.insert(spot).into('spots').returning('*');
};

// join? And get full objects not just IDs
exports.getFeedingSpotsForUser = (userId) => {
  const spotIds = db
    .select('spot_id')
    .from('feedings')
    .where('user_id', userId);

  const feedingSpots = spotIds.map((id) => {
    db.select().from('spots').where('id', id);
  });

  return feedingSpots;
};

exports.getLastFeedingForStray = (stray) => {
  const spotId = stray['spot_id'];
  return db.select('date').from('feedings').where('spot_id', spotId);
};

exports.getAllStraysForSpot = (spotId) => {
  return db.select().from('strays').where('spot_id', spotId);
};

exports.addNewStray = (stray) => {
  console.log({ stray });
  return db.insert(stray).into('strays').returning('*');
};

exports.addNewFeeding = (feeding) => {
  // find the right spot, update the date to the new one
  return db.insert(feeding).into('feedings').returning('*');
};
