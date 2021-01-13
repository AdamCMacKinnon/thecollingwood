const express = require('express');
const albums = express.Router();
let dataFile = require('../data/albums.json')

var data = dataFile.albums;
albums.get('/albums', (req, res) =>{
    let shortname = dataFile.albums.shortname
    res.render('albums', {
        albums: data,
        // shortname: shortname,
        // pageTitle: `${albums[0].shortname}`
    })
})
albums.get('/albums/:shortname', (req,res) => {
    let album = [];
    let tracklist = [];
    data.forEach(albumObj => {
        if (albumObj.shortname === req.params.shortname){
            album.push(albumObj)
            tracklist.push(...albumObj.tracklist)
        }
    })
    res.render('albums', {
        albums : album,
        tracklist : tracklist,
        pageTitle : `${data.album}`
    })
    
})


module.exports = albums;