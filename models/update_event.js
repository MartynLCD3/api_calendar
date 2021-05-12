import {Event} from './event_model.js';
export const update_event = async (id,data) => {
   await Event.updateOne({"_id":id},{$set:data});
}
