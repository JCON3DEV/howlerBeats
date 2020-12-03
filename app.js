const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const path = require("path");

// app.use(express.static('public')); 
/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
