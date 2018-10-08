const axios = require("axios");

let favs = [];
let updates = [];
let updateId = 0;
let review = [];
let title = "";

function gettingData (req, res, next){
    var brews = [];
    axios
        .get('https://api.openbrewerydb.org/breweries')
        .then( (results) => {
            // var brewski = results.data
            results.data.map((brew) => {
                let img = "";

                if(brew.name === "Avondale Brewing Co") {
                    img = 
                    "https://mashingin.files.wordpress.com/2017/07/avondalemft_edited.jpg?w=772";
                }
                if(brew.name === "Band of Brothers Brewing Company") {
                    img = 
                    "http://blackbrewculture.com/wp-content/uploads/2018/02/BBC_breweries_bandofbrothers-1024x680.jpg";
                }
                if(brew.name === "Trim Tab Brewing") {
                    img = 
                    "https://mashingin.files.wordpress.com/2017/05/bankston88feature_edited.jpg?w=772";
                }
                if(brew.name === "Yellowhammer Brewery") {
                    img = 
                    "https://www.abelandcole.co.uk/media/5390_20326_z.jpg";
                }
                if(brew.name === "Bearpaw River Brewing Co") {
                    img = 
                    "https://bloximages.chicago2.vip.townnews.com/frontiersman.com/content/tncms/assets/v3/editorial/b/b1/bb1fc9c6-9d90-11e7-8617-8be7d2b3b907/59c1a66052b6e.image.jpg?resize=1200%2C936";
                }
                if(brew.name === "King Street Brewing Co") {
                    img = 
                    "https://m5.paperblog.com/i/94/949952/intuition-ale-works-king-street-stout-to-be-a-L-PXamP4.jpeg";
                }
                if(brew.name === "1912 Brewing") {
                    img = 
                    "http://www.1912brewing.com/wp-content/uploads/2017/07/1912-Growlers.jpg";
                }
                if(brew.name === "Bad Water Brewing ") {
                    img = 
                    "https://pikfly.com/images/products/141/20984.jpg";
                }
                if(brew.name === "BJs Restaurant & Brewery - Chandler") {
                    img = 
                    "https://s3-us-west-1.amazonaws.com/bjsrestaurants/img_579112a5cfa379.94101181_cb-large.jpg";
                }
                if(brew.name === "BlackRock Brewers") {
                    img = 
                    "https://untappd.akamaized.net/photos/2018_07_17/3b368232dad863a5eba520cc1fd7b049_640x640.jpg";
                }
                if(brew.name === "Dragoon Brewing Co") {
                    img = 
                    "https://static1.squarespace.com/static/53ed6608e4b042bb7cb43256/t/594989e0b6ac502e55e8f928/1497991675788/TECHAF2";
                }
                if(brew.name === "Grand Canyon Brewing Company") {
                    img = 
                    "https://pikfly.com/images/products/41/14767.jpg";
                }
                if(brew.name === "Mudshark Brewing Co") {
                    img = 
                    "https://pikfly.com/images/products/141/21227.jpg";
                }
                if(brew.name === "Richter Aleworks") {
                    img = 
                    "https://images1.phoenixnewtimes.com/imager/u/745xauto/9260758/richter_beers.jpg";
                }
                if(brew.name === "SanTan Brewing Co") {
                    img = 
                    "https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2015/10/16195739/san_tan.jpg";
                }
                if(brew.name === "State 48 Brewery") {
                    img = 
                    "http://www.phx8.com/phoenix-media/wp-content/uploads/2017/11/state48-1-2.jpg";
                }
                if(brew.name === "Wren House Brewing Company") {
                    img = 
                    "https://beerconnoisseur.com/sites/default/files/styles/beer_page_245w/public/beer/black-caddis-by-wren-house-bewing.jpg?itok=-dBcO-ET";
                }
                if(brew.name === "Brick Oven Pizza Co / Brick & Forge Brewing") {
                    img = 
                    "https://i.ytimg.com/vi/rg4cHybnw20/maxresdefault.jpg";
                }
                if(brew.name === "Diamond Bear Brewing Co") {
                    img = 
                    "https://cdn.hellosubscription.com/wp-content/uploads/2016/08/Craft-Beer-Club-August-2016-review.jpg";
                }
                if(brew.name === "Lost Forty Brewing") {
                    img = 
                    "https://www.fayettevilleflyer.com/wp-content/uploads/2016/02/lf-3.jpg";
                }

                const newBrew = {
                   ...brew,
                   img 
                };
                brews.push(newBrew);
            })
            res.status(200).json(brews)
        })
        .catch( (err)=> {
        console.log(err)
        res.status(500).json(err)
        });
};


function reviewing (req, res, next){
    favs.push(req.body);
    res.status(200).json(favs)
}

function deleteReview( req, res, next){
    const { x } = req.params;
    const favsIndex = favs.findIndex( b => b.x === x);
    favs.splice(favsIndex, 1);
    res.status(200).json(favs)
}

function update(req, res, next){
    updates.push({update: req.body.newInput, id: updateId});
    updateId++
    console.log(updates)
    res.status(200).json(updates)
}//this is actually the post

function postReview(req,res, next){
    console.log(req.body, req.params)
    if (req.params.id !== typeof undefined){
        updates.splice(req.params.id, 1, req.body.value)
        // review = req.params.id;
        console.log(updates)
        return res.status(200).json(updates)
    }
    res.status(200).json(review)
}//this is actually the put req.body needed

function editTitle(req, res){
    title = req.body.input;
    console.log(title)
    res.status(200).json(title)
}

module.exports = {
    gettingData,
    reviewing,
    deleteReview,
    update,
    postReview,
    editTitle
}


// function getSeries(req, res, next) {
//     axios.get('http://www.amiiboapi.com/api/gameseries').then(response => {
//         series = response.data.amiibo
//         res.status(200).send(series)
//     }).catch(err => res.status(500).send(err))

// .then(resp => {
//     // books = resp.data;
//     resp.data.map(book => {
//       let image = "";
// console.log('rEs>>',results.data)
            // console.log('BRewSsS >>>>',brews)