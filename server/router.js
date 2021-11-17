const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const { cloudinary } = require('./cloudinary');

router.get('/spots', controller.getAllSpots);
router.get('/strays', controller.getAllStrays);
router.post('/spots', controller.addNewSpot);
router.post('/strays', controller.addNewStray);
router.post('/users', controller.addNewUser);
router.post('/feedings', controller.newFeeding);

router.post('/api/upload', async (req, res) => {
  try {
    console.log(req.body.data);
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'rmigzkh1',
    });
    console.log(uploadResponse);
    res.send(JSON.stringify(uploadResponse.url));
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

module.exports = router;
