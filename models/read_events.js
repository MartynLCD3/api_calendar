import {Event} from './event_model.js';
export const read_events = async () => {
        const all_events = await Event.find({},{__v:0},(err)=>{
            if(err) throw new Error(`Error: ${err}`);
        }).lean();
        return all_events;
}
