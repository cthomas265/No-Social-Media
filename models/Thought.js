const { Schema, model } = require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //date format getter
    }
}, 
{
    toJSON: {getters: true} //enables use of getter
})

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type:Date,
        default: Date.now,
        // date format getter here!!!!!!!!!!!!
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        reactionSchema
    ]
},
{
    toJSON: {getters: true, virtuals: true} //enables use of getter
})
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;