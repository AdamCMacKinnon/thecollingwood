const express = require('express');
const router = express.Router();
let dataFile = require('../data/albums.json')



router.get('/', (req, res) => {
    let data = dataFile.albums;

    // console.log(data);
    data.forEach(el =>{
       album = `${el.album}`
       artwork = `${el.artwork}`
       tracklist = `${el.tracklist}`
       summary = `${el.summary}`


    })
    res.render('index', {
        data: data,
        album: album,
        artwork: artwork,
        tracklist: tracklist,
        summary: summary



    })

})

module.exports = router;