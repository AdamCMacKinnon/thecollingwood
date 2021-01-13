const express = require("express");
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get("/forum", (req, res) => {
  res.render('forum', {
      pageTitle: "Forum"
  })
});


router.post('/forum', (req, res) => {
  
    //req.body
    // res.send('data')

    res.status(200).json({name: req.body.name, message: req.body.message})
})

module.exports = router;