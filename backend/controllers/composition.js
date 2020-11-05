const Composition = require('../models/Composition');

exports.getAllCompositions = (req, res, next) => {
  Composition.find()
    .then(compositions => res.status(200).json({ compositions }))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneComposition = (req, res, next) => {
  Composition.findOne({ _id: req.params.id })
    .then(composition => res.status(200).json({ composition }))
    .catch(error => res.status(404).json({ error }));
};

exports.createComposition = (req, res, next) => {
  delete req.body._id;

  new Composition({ ...req.body }).save()
    .then(composition => res.status(201).json({ composition }))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyComposition = (req, res, next) => {
  Composition.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Composition modified' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteComposition = (req, res, next) => {
  Composition.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Composition deleted' }))
    .catch(error => res.status(400).json({ error }));
};