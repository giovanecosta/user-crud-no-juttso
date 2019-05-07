import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  _author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  time: {
    type: String,
    required: true
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
