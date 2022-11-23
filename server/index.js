const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors ()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5555;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "TALENT PLUS..." });
});


app.listen(port, () => {
    console.log(`Server listening on port🪐🚀 ${port}`);
    });