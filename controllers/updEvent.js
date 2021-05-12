import {update_event} from '../models/update_event.js';
export const updEvent = (req,res) => {
   let {_id} = req.params;
   let {name,start,end,description,color} = req.body;
   if(name.length == 0 || start.length == 0 || end.length == 0 || description.length == 0 || color.length == 0) return res.status(404).json({msg:"error"});  
   const info =  {
       name:name,
       start:start,
       end:end,
       description:description,
       color:color
   }
   update_event(_id,info);
   res.status(200).json({msg:"ok"});
}
