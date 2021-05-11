import express from 'express';
import cors from 'cors';
import {connection} from './config/connection.js';
import {newEvent} from './controllers/newEvent.js';

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(cors());

/**Routes**/
router.get('/',(req,res)=>{
  res.json({msg:"ok"});
});

// add event
router.post('/new_event',cors(),(req,res)=>{
  newEvent(req,res);
});

// read event

// delete event

// update event

app.use('/api',router);
app.get('*',(req,res)=>{
  res.status(404).json({msg:"error"})
});

const port = process.env.PORT || 3002;
app.set('PORT',port);
const server = app.listen(app.get('PORT'), () => console.log(`Servidor iniciado en el puerto ${server.address().port}`));
server.on('error', error => console.log(`Message:${error}`));
