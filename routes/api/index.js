// const express = require('express');
// const router = express.Router();

// const routes = ['login'];

// for (let route of routes) {
//   router.use(`/${route}`, require(`./${route}`));
// }

// module.exports = router;

const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  // res.json({ message: `testing index root ${process.env.PORT}` });
  res.send('Dis is home!')
});





module.exports = router;