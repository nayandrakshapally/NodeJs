const express = require('express'),
      http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const dishRouter = require('./routes/dishRoutes');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use(morgan('dev'));

app.use(bodyParser.json());



app.use('/dishes/', dishRouter);
app.use('/promotions/', promoRouter);
app.use('/leaders/', leaderRouter);




const server = http.createServer(app);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//using static files from local
// app.use(express.static(__dirname + '/public'));


//using simple express server
// app.use((req,res,next)=>{
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// })

//without using express-router
// app.all('/dishes', (req,res,next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });

// app.get('/dishes', (req,res,next) => {
//     res.end('Will send all the dishes to you!');
// });

// app.post('/dishes', (req, res, next) => {
//  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put('/dishes', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /dishes');
// });
 
// app.delete('/dishes', (req, res, next) => {
//     res.end('Deleting all dishes');
// });
