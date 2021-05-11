import {create_event} from '../models/create_event.js';
export const newEvent = (req,res) => {
  let {name,start,end,description,color} = req.body;
  if(name.length == 0 || start.length == 0 || end.length == 0 || description.length == 0 || color.length == 0) return res.json({msg:"error"})
  let info = {
    name:name,
    start:start,
    end:end,
    description:description,
    color:color
  }
  create_event(info,res);
}
