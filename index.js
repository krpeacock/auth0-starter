const express = require('express');
const path = require('path');

const logger = require('./logger.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/foo', (req, res)=>{
  res.json({foo:'foo'});
})

// The "catchall" handler: for any request that doesn't match one above, send
// back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3030;

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})