

const express = require('express');

const contactcontroller=require('../controllers/contactus');

const router = express.Router();


// /contactus => GET
router.get('/contactus',contactcontroller.getcontact );

// /contactus => POST
router.post('/contactus', contactcontroller.postcontact);
module.exports = router;