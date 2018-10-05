const c = require ('./controller')
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const app = express();

const port = 3002;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/breweries' , c.gettingData)

app.listen(port, ()=> {console.log(`Server listening on port ${port}`); } );


