const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId(), },
    reactionBody: { type: String, required: true, maxlength: 25, },
    createdAt: { type: Date, default: Date.now, },
    username: { type: String, required: true, },
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

module.exports = reactionSchema;
