import mongoose from 'mongoose';
const eventSchema = new mongoose.Schema({
  idEvent: String,
  name: String,
  start: String,
  end: String,
  description: String,
  color: String,
});
export const Event = mongoose.model('events',eventSchema);
