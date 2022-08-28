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
        image: req.file.fileName,
        price: price,
        location: location,
      });
      await newAd.save();
      res.json({ message: 'OK' });
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads//${req.file.filename}`);
      }
      res.json({ message: 'No permission' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateAdById = async (req, res) => {
  const { title, description, date, photo, price, location, userName } =
    req.body;
  try {
    const ad = await Ad.findById(req.params.id);
    if (req.user) {
      if (ad) {
        if (!req.file) {
          await Ad.updateOne(
            { _id: req.params.id },
            {
              $set: {
                title: title,
                description: description,
                date: date,
                price: price,
                location: location,
                userName: req.user.login,
              },
            }
          );
        }
        await Ad.updateOne(
          { _id: req.params.id },
          {
            $set: {
              title: title,
              description: description,
              date: date,
              image: req.file.fileName,
              price: price,
              location: location,
              userName: req.user.login,
            },
          }
        );
      }
      res.json({ message: 'OK' });
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads//${req.file.filename}`);
      }
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
