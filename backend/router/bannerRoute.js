const express = require('express');
const router = express.Router();
const {updateBanner, getBanner} = require("../controller/banner.controller")

router.get('/hello', (req, res) => {
    res.send("hello world");
})

router.put('/banner', updateBanner);
router.get('/banner', getBanner);

module.exports = router;