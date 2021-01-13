const express = require('express');
const router = express.Router();
let dataFile = require('../data/albums.json')



router.get('/', (req, res) => {

    let data = dataFile.albums;


    res.render('index', {
        data: data,
        pageTitle: "The Collingwood"

    })

})

module.exports = router;