const router = require('express').Router();

const { 
    getUsers, 
    getUserById,
    createUser,
    editUser,
    deleteUser,
    addFriend,
    // removeFriend,
} = require('../../controllers/user-cont');

// base url for this file at this spot is localhost:3001/api/users
router.route ('/').get(getUsers).post(createUser);
//localhost:3001/api/users/:userId
router.route ('/:userId').get(getUserById).put(editUser).delete(deleteUser);
// //localhost:3001/api/users/:userId/friends/:friendId
router.route ('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;