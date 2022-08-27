const Ad = require('../models/ads.model');
const sanitize = require('mongo-sanitize');

exports.getAllAds = async (req, res) => {
  try {
    res.json(await Ad.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) res.status(404).json({ message: 'Not found...' });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getAdBySearch = async (req, res) => {
  try {
    const ad = await Ad.find({ title: { $regex: /req.params.searchPhrase/ } });
    if (!ad) res.status(404).json({ message: 'Not found...' });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addAd = async (req, res) => {
  const { title, description, date, photo, price, location } = sanitize(
    req.body
  );

  try {
    if (req.user) {
      const newAd = new Ad({
        title: title,
        description: description,
        date: date,
        photo: photo,
        price: price,
        location: location,
      });
      await newAd.save();
      res.json({ message: 'OK' });
    } else {
      res.json({ message: 'No permission' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateAdById = async (req, res) => {
  const { title, description, date, photo, price, location } = req.body;
  try {
    const ad = await Ad.findById(req.params.id);
    if (req.user) {
      if (ad) {
        await Ad.updateOne(
          { _id: req.params.id },
          {
            $set: {
              title: title,
              description: description,
              date: date,
              photo: photo,
              price: price,
              location: location,
            },
          }
        );
      }
      res.json({ message: 'OK' });
    } else {
      res.json({ message: 'No permission' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.removeAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (req.user) {
      if (ad) {
        await Ad.deleteOne({ _id: req.params.id });
        res.json({ message: 'Ok' });
      }
    } else {
      res.json({ message: 'No permission' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
