import express from 'express';
import cors from 'cors';
import {connection} from './config/connection.js';
import {getEvents} from './controllers/getEvents.js';
import {newEvent} from './controllers/newEvent.js';
import {delEvent} from './controllers/delEvent.js';
import {updEvent} from './controllers/updEvent.js';

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(cors());

/**Routes**/
router.get('/',(req,res)=>{
   res.json({msg:"ok"});
});

router.post('/new_event',cors(),(req,res)=>{
   newEvent(req,res);
});

router.get('/get_events',cors(),(req,res)=>{
   getEvents(res);
});

router.delete('/:_id',cors(),(req,res)=>{
   delEvent(req,res);
});

// update event
router.put('/:_id',cors(),(req,res)=>{
   updEvent(req,res);
});

app.use('/api',router);
app.get('*',(req,res)=>{
  res.status(404).json({msg:"error"})
});

const port = process.env.PORT || 3002;
app.set('PORT',port);
const server = app.listen(app.get('PORT'), () => console.log(`Servidor iniciado en el puerto ${server.address().port}`));
server.on('error', error => console.log(`Message:${error}`));
