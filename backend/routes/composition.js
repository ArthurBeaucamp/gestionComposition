const express = require('express');
const router = express.Router();

const compositionCtrl = require('../controllers/composition');

router.get('/', compositionCtrl.getAllCompositions);
router.get('/:id', compositionCtrl.getOneComposition);
router.post('/', compositionCtrl.createComposition);
router.put('/:id', compositionCtrl.modifyComposition);
router.delete('/:id', compositionCtrl.deleteComposition);

module.exports = router;