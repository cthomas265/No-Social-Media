const router = require('express').Router();

const { 
    getThoughts, 
    getThoughtById,
    createThought,
    editThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-cont');

// base url for this file at this spot is localhost:3001/api/thought
router.route ('/').get(getThoughts).post(createThought);
//localhost:3001/api/thought/:thoughtId
router.route ('/:thoughtId').get(getThoughtById).put(editThought).delete(deleteThought);
//localhost:3001/api/thought/:thoughtId/reactions
router.route ('/:thoughtId/reactions').post(addReaction)
router.route ('/:thoughtId/reactions/:reactionId').delete(removeReaction);