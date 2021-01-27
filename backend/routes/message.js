const express = require("express")
const messageCtrl = require('../controllers/message');
const router = express.Router();

const auth = require('../middleware/auth');
router.post("/saveMessage", messageCtrl.newMessage);
router.get("/getAllMessage", messageCtrl.getAllMessage)
router.get("/getOneMessage", messageCtrl.getOneMessage)
router.post("/deleteMessage", messageCtrl.deleteMessage)
module.exports = router;