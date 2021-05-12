import {delete_event} from '../models/delete_event.js';
export const delEvent = (req,res) => {
	let {_id} = req.params;
	delete_event(_id);
	res.status(200).json({msg:"ok"});
}
