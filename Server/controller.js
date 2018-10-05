const axios = require("axios");

function gettingData (req, res){
    var brews = [];
    axios
        .get('https://api.openbrewerydb.org/breweries')
        .then( (results) => {
            // var brews = results.data
            results.data.map(brew => {
                let img = "";

                if(brew.name === "Avondale Brewing Co"){
                    img = "http://media.al.com/entertainment_impact/photo/avondale-1jpg-d9d037f03b203eac.jpg";
                }
                // const newBrew = {
                    
                // }

                // brews.push(newBrew)
                
            })
            res.status(200).json(results.data)
            // console.log('rEs>>',results.data)
            // console.log('BRewSsS >>>>',brews)
        })
        .catch( (err)=> {
        console.log(err)
        res.status(500).json(err)
        });
};

module.exports = {gettingData}


// function getSeries(req, res, next) {
//     axios.get('http://www.amiiboapi.com/api/gameseries').then(response => {
//         series = response.data.amiibo
//         res.status(200).send(series)
//     }).catch(err => res.status(500).send(err))

// .then(resp => {
//     // books = resp.data;
//     resp.data.map(book => {
//       let image = "";
