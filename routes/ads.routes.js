const express = require('express');
const router = express.Router();
const AdController = require('../controllers/ads.controller');
const authMiddleware = require('../utils/authMiddleware');

router.get('/ads', AdController.getAllAds);
router.get('/ads/:id', AdController.getAdById);
router.get('/api/ads/search/:searchPhrase', AdController.getAdBySearch);
router.post('/ads', authMiddleware, AdController.addAd);
router.put('/ads/:id', authMiddleware, AdController.updateAdById);
router.delete('/ads/:id', authMiddleware, AdController.removeAdById);

module.exports = router;
