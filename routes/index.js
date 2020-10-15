const express = require('express');
const router = express.Router();
const api = require('./api');

router.use('/api', api);

// router.get("/", (req, res) => {
//   // res.json({ message: `testing index root ${process.env.PORT}` });
//   res.send('This is home!')
// });





module.exports = router;