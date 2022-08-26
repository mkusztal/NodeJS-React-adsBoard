const express = require('express');
const router = express.Router();
const AdController = require('../controllers/ads.controller');

router.get('/ads', AdController.getAllAds);
router.get('/ads/:id', AdController.getAdById);
router.get('/api/ads/search/:searchPhrase', AdController.getAdBySearch);
router.post('/ads', AdController.addAd);
router.put('/ads/:id', AdController.updateAdById);
router.delete('/ads/:id', AdController.removeAdById);

module.exports = router;
