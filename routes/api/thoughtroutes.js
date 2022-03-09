const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtControl');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought)  .put(updateThought) .delete(deleteThought);

router.route('/:thoughtId/reaction').post(addReaction);
//router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;