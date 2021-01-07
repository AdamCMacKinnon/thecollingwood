const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

//routes



//server
app.listen(3000, () => {
    console.log('server running so fresh and so clean (clean) on port Andre 3000')
}
    )