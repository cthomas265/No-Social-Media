const { User } = require('../models');
const userController = {
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  editUser(req, res) { 
    User.findOneAndUpdate({
      _id: req.params.userId}, {$set: req.body}, {new: true})
      .then((dbUserData) => {
        res.json(dbUserData);
      }
    ).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
  },

  deleteUser(req, res) {
    User.findOneAndDelete({
      _id: req.params.userId
    }).then((dbUserData) => {
      res.json(dbUserData);
    }).catch ((err) => {
      console.log(err);
      res.status(500).json(err)
    });
  },

  addFriend(req, res) {
    User.findOneAndUpdate({
      _id: req.params.userId},
      {$push: { friends: req.params.friendId }}, {new:true})
      .then ((dbUserData) => {
        res.json(dbUserData);
      }). catch ((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  removeFriend(req, res) {
    User.findOneAndUpdate({
      _id: req.params.userId},
      {$pull: { friends: req.params.friendId }}, {new:true})
      .then((dbUserData) => {
        res.json(dbUserData);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  }
};



module.exports = userController;