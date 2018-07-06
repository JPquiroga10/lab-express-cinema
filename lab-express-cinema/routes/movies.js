const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
   Movie.find()
       .then((movie)=>{
           console.log("movie list =========================== ", movie);
           res.render("movies", {movie})
       })
       .catch((err)=>{
           console.log(err)
       })
   // res.render('movies');
});

router.get('/:id', (req, res, next) => {
   Movie.findById(req.params.id)
       .then((movie)=>{
           console.log("movie list =========================== ", movie);
           res.render("movies", {movie})
       })
       .catch((err)=>{
           console.log(err)
       })
   // res.render('movies');
});


module.exports = router;