const db = require('../db/index');

exports.addNewUser = (user) => {
  return db.insert(user).into('users').returning('*');
};

exports.getAllFeedingSpots = () => {
  return db.select('*').from('spots');
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
  return db.insert(stray).into('strays').returning('*');
};
