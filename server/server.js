var express = require('express');
var bodyparser = require('body-parser');
var { mongoose } = require('./db/db.js');
var { Event } = require('./models/event.js');
var { User } = require('./models/user.js');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});

app.get('/', (req,res) => {
    res.send("is it working");
});

eventslist = {"events": [
    {
        "_id":"5bead5987c1f432c7aa11397",
        "event_category": "sports",
        "event_subcategory": "cricket",
"event_location": {
            "longitude":"7656757",
            "latitude":"766866",
    "address": {
            "id":"8979",
            "city":"Delhi",
            "street":"maibn ygj",
            "pin":"110009"}
},

        "event_name":"coaching",
        "event_description":"ghkugiugkjgkjhkjhkjhkjhkj kjasdkjhdkjhaskd nalkdjskldjl fnjashkj",
        "event_image_url":"https://thumbs.dreamstime.com/b/cricket-player-1426972.jpg",
        "event_start_date":"23/11/2018",
        "event_last_date":"39/11/2018",
        "event_min_age":"5 yrs",
        "event_max_age":"18 yrs",
        "event_price":"500 rs per month",
        "event_booking": {
            "url": "https://www.eventshigh.com/detail/Delhi/56378e1b79e6bb3ae5ebcecbab900cf0-Artistic-Planter-Workshop?src=eh-test",
            "inquiry_url": "https://www.eventshigh.com/detail/Delhi/56378e1b79e6bb3ae5ebcecbab900cf0-Artistic-Planter-Workshop?src=eh-test"
        }},
        {
            "_id": "5bead5987cgjh32c7aa11397",
            "event_category": "singing",
            "event_subcategory": "classical",
            "event_location": {
                "longitude": "3244",
                "latitude": "124",
                "address": {
                    "id": "4121",
                    "city": "Delhi",
                    "street": "jogg",
                    "pin": "110007"
                }
            },
            "organizer_email":"shivamkalra2017@gmail.com",
            "event_name": "coaching",
            "event_description": "hello there this is a trial",
            "event_image_url": "https://thumbs.dreamstime.com/b/cricket-player-1426972.jpg",
            "event_start_date": "23/11/2018",
            "event_last_date": "39/11/2018",
            "event_booking": {
                "url": "https://www.eventshigh.com/detail/Delhi/56378e1b79e6bb3ae5ebcecbab900cf0-Artistic-Planter-Workshop?src=eh-test",
                "inquiry_url": "https://www.eventshigh.com/detail/Delhi/56378e1b79e6bb3ae5ebcecbab900cf0-Artistic-Planter-Workshop?src=eh-test"
            }
        }
]}
categories = {"categories": ['Art','Cooking','EventsFree' ,'Activity','Language','Music','Open Play','Private Lessons','Science','Swim']}

app.get('/categories', (req,res) => {
    // Event.findcategories().then((result) => {
    //     console.log(result);
    //     res.status(200).send(result);
    // }, (err) => {
    //     res.status(400).send(err);
    // });
    res.status(200).send(categories)
})

app.get('/events', (req,res) => {
    res.status(200).send(eventslist);
})

app.delete('/user/:userId/events/:eventId', (req,res) => {
    response = {
        "event":"successfully deleted"
    }
    res.header(200).send(response);
    //res.header(404).send("error")
})

//not clear what this does
app.post('/user/:userId/events', (req,res) => {
    console.log(req.body);
    working = {
        "event":"created"
    }
    res.header(200).send(working);
//res.header(404).send("error")
})

app.get('./events?category=:event_category&subcategory=:subcategory&min-age=:min_age&max-age=:max-age&start-date=:start_date&last-date=:last_date&place-within=:within&lat=:lat&lng=:lng&start=:start&limit=:limit',(req,res) => {

    event_category = req.params.event_category;
    subcategory = req.params.subcategory;
    min_age = req.params.min_age;
    max_age = req.params.max-age;
    start_date = req.params.start_age;
    last_date = req.params.last_date;
    lng = req.params.lng;
    lat = req.params.lat;
    within = req.params.within;
    start = req.params.start;
    limit = req.params.start;

// start and limit signifies what
// and yes sir I'll add if to every selection criteria later on
    var event = new Event();
    event.find({
        event_category,
        event_subcategory: subcategory,
        event_min_age:min_age,
        event_max_age:max_age,
        event_start_date:start_date,
        event_last_date:last_date,
        event_location:{
            longitude:lng,
            latitude:lat,
            within:within
        }
    }, (results,err) => {
        if(!results){
            res.send("No such event exist")
        }
        res.header(200).send(results);
    }) 
})

//what is this route for??
app.put("/user/:userId/events/:eventId",(req,res) => {
    res.header(200).send("successfully done");
//res.header(404).send("error")
})

app.get("/user/:userId/events", (req,res) => {
   
    
    res.header(200).send(eventslist);
});
