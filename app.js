const express = require('express');//same as include
const app = express();

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html'); //the route the user uses to find an area like www.web.com/contact
});//listen for someone hitting the root of the site)

app.get('/portfolio', (req, res)=>{
  res.sendFile(__dirname + '/portfolio.html');
});
app.get('/contact', (req, res)=>{
  res.sendFile(__dirname + '/contact.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
