const { Schema, model } = require('mongoose');

function formatDate(date) {
    date
}
// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, require: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: date => formatDate(date)},
    thoughts: [{ type: Schema.Types.ObjectId,ref: 'thought'}],
    friends: [{ type: Schema.Types.ObjectId,ref: 'user'}] 
},
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })


// Initialize our User model
const thought = model('thought', thoughtSchema);


module.exports = thought;
