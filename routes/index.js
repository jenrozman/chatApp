const express = require('express');
const router = express.Router(); //handles route
const path = require('path');


router.get('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname, '../views/index.html')); //the route the user uses to find an area like www.web.com/contact
});//listen for someone hitting the root of the site)
//path.resolve is telling to to move out into the root, the views folder and find the index.html there

module.exports = router; //makes it public for node
