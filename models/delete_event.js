import {Event} from './event_model.js';
export const delete_event = async (data) => {
   await Event.deleteOne({"_id":data});
}
