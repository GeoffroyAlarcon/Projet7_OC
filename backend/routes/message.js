const express = require("express")
const router = express.Router()
const messageCtrl = require('../controllers/message');
const auth = require('../middleware/auth');

router.post("/saveMessage", messageCtrl.newMessage);
router.get("/getAllMessage", messageCtrl.getAllMessage)
module.exports = router;