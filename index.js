const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const http = require('http');

/* Setting up developement environment */
// const MONGO_USER = process.env.MONGO_USER;
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
// const mongo_url = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@4c-vhflf.gcp.mongodb.net/wwtrends?retryWrites=true&&authSource=admin`;


// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);


// const connexion = mongoose.connect(mongo_url, function (err) {
//     if (err) {
//         console.log("Problem when connecting to the database");
//     }
//     else {
//         console.log('SUCCESSFULLY connected to mongo');
//     }
// })


const app = express();
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ "message": err.name + ": " + err.message });
  }
  res.header('Access-Control-Allow-Origin', req.headers.origin) // <-- you can change this with a specific url like http://localhost:4200
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,X-HTTP-Method-Override')
  next()
})



app.use('/api/main', require('./server/routes/main'))
app.use('/api/trends/google', require('./server/routes/google-trends'))




app.use(express.json());

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);




