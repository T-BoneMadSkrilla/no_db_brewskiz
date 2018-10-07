const c = require ('./controller')
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const app = express();

const port = 3002;

app.use(bodyParser.json());
app.use(cors());

const url = "/api/breweries"

app.get(url , c.gettingData);

app.post(url, c.reviewing);

app.delete(`${url}/:x`, c.deleteReview);

app.put(`${url}/update`, c.update);

app.listen(port, ()=> {console.log(`Server listening on port ${port}`); } );


