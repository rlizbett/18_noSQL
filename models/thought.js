const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, require: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now },
    username: {type: String, required: true,},
    reaction : [Reaction],
 },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  })


// Initialize our User model
const thought = model('thought', thoughtSchema);

module.exports = thought;
