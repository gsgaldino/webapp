require('dotenv').config();
const app = require('./app');

const PORT = Number(process.env.PORT || 3333);
const ENV = process.env.NODE_ENV || 'development';

function serverStartCallback(){
  console.log('starting REST API on port -', PORT);
  console.log(`env mode: ${ENV}`);
};

app.listen(PORT, serverStartCallback);
