import express from 'express';
import mongoose from 'mongoose';
import config from '../config/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from './routes/assetsrouter';
import userRouter from './routes/userrouter';
import staticRouter from './routes/statrouter';
import path from 'path'
 
const app = express();
const port = process.env.PORT || 5000;
 //config.mongoUri
//"mongodb://user:user1234@ds133476.mlab.com:33476/heroku_bj485v87"
//
mongoose.Promise = global.Promise
mongoose.connect("mongodb://user:user1234@ds133476.mlab.com:33476/heroku_bj485v87")
mongoose.connection.on('error', () => {
  throw new Error("unable to connect to database")
})

 
 

app.use(cors());
app.use(bodyParser.json());

app.use('/',staticRouter);
app.use('/',authRouter);
app.use('/',userRouter);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));