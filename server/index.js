const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors ()); 
const port = 5555;

app.get('/', (req, res) => {
    res.status(200).json({msg: 'TALENT PLUS'})
});



app.listen(port, () => {
    console.log(`Server listening on port🪐🚀 ${port}`);
    });