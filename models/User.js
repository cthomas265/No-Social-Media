const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/, 'Needs to be valid email'],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, 
{
    toJSON: { virtuals: true },
})
userSchema.virtual('friendCount').get(function() {
    return this.friends.length; //ref line 20
})

const User = model('User', userSchema);

module.exports = User;