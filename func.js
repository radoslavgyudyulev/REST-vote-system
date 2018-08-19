// model
const Vote = require('./models/Vote');

// accessToken generator
const randomstring = require("randomstring");

module.exports = {
    // The function create a custom vote for the user and return token
    // You must pass this three arguments : q,a1,a2
    createVote : (req,res) => {
        let accessToken = randomstring.generate(12);
        let vote = req.body

        Vote.create({
            token : accessToken,
            vote : vote,
        }).then(token => {
            res.json(token)
        })  
        },
    // The function accept token and return the current vote
    getCurrentVote : (req,res) => {
        Vote.find({token : req.body.token})
        .then(data => res.send(data))
    },
    // The function accept token and points and return the incremented obj
    incrementVote : (req,res) => {
        let acessToken = req.body.token
        let point = req.body.point

    if(point == 1) {
       incrementFirst(acessToken);
    } 
    if(point ==  2) {
       incrementSecond(acessToken);
    } 

    function incrementFirst(acessToken) {
        Vote.findOneAndUpdate({token : acessToken}, {$inc:{a1points: 1}}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
    
            res.send(doc)
        });
    }

    function incrementSecond(acessToken) {
        Vote.findOneAndUpdate({token : acessToken}, {$inc:{a2points: 1}}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
    
            res.send(doc)
        });
    }
    }
}