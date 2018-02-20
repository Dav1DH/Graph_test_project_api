var Data = require('../models/data')

exports.getAll = (req, res) => {
    Data.find({}, function (err, data) {
        if (!err) {
            res.json({error: false, data: data});
        } else {
            res.json({error: true, message: "Error on getting data.", errorMessage: err})
        }
    })
}

exports.add = (req, res) => {
    var query = {},
        update = { nodes: req.body.nodes,
            links: req.body.links, },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };
    Data.findOneAndUpdate(query, update, options ,
        function (err, data) {
            if (!err) {
                res.json({error: false, data: data});
            } else {
                res.json({error: true, message: "Error on saving new data.", errorMessage: err})
            }
        }
    );
}