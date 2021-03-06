import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  events : [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

const User = mongoose.model("User", UserSchema);

export default User;
