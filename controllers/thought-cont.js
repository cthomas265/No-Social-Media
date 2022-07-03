const { User, Thought } = require('../models');
const thoughtContoller = {
    getThoughts(req, res) {
        Thought.find() 
        .select('-__v')
        .then((dbThoughtData) => { 
            res.json(dbThoughtData); 
        })
        .catch((err) => { 
            console.log(err); 
            res.status(500).json(err); 
        }); 
    },

    getThoughtById(req, res) { 
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((dbThoughtData) => { 
            res.json(dbThoughtData); 
        })
        .catch((err) => { 
            console.log(err); 
            res.status(500).json(err); 
        });
    },

    createThought(req, res) { 
        Thought.create (req.body) 
        .then((dbThoughtData) => { 
            res.json(dbThoughtData); 
        })
        .catch((err) => { 
            console.log(err); 
            res.status(500).json(err); });
    },

    editThought(req, res) { 
        Thought.findOneAndUpdate({ 
            _id: req.params.thoughtId }, req.body) 
            .then((dbThoughtData) => { 
                res.json(dbThoughtData); 
            }
        ).catch((err) => { 
            console.log(err); 
            res.status(500).json(err); });
    },

    deleteThought(req, res) { 
        Thought.findOneAndDelete({ 
            _id: req.params.thoughtId }) 
            .then((dbThoughtData) => { 
                res.json(dbThoughtData); 
            } 
        ).catch((err) => { 
            console.log(err); 
            res.status(500).json(err); });
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate({
            _id:req.params.thoughtId }, req.body)
            .then((dbThoughtData) => {
                res.json(dbThoughtData); 
            }
        ).catch((err) => { 
            console.log(err); 
            res.status(500).json(err);
        });
    },

    removeReaction(req, res) {
        Thought.findOneAndUpdate({
            _id: req.params.thoughtId
        }).then((dbThoughtData) => {
            res.json(dbThoughtData);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
    }
};

module.exports = thoughtContoller;
