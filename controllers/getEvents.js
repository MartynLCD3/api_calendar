import {read_events} from '../models/read_events.js';
export const getEvents = (res) => {
   Promise.all([read_events()]).then(objects => {
     let [events] = objects;
     if(events.length == 0) return res.status(200);
     res.status(200).json(events);
   });
}
