import {Event} from './event_model.js';
export const create_event = (data,res) => {
  const new_event = new Event(data);
  new_event.save(err => {
    if(err) throw new Error(`Error: ${err}`);
    res.json({msg:"ok"})
  });
}
