const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  // res.json({ message: `testing index root ${process.env.PORT}` });
  res.send('Dis is home!')
});





module.exports = router;