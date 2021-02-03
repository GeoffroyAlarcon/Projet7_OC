const express = require("express")
const messageCtrl = require('../controllers/message');
const router = express.Router();

const auth = require('../middleware/auth');
router.get("/getAllMessage", auth,messageCtrl.getAllMessage);
router.get("/getOneMessage",auth, messageCtrl.getOneMessage);
router.post("/answerMessage",messageCtrl.answerMessage);
router.post("/saveMessage", messageCtrl.newMessage);
router.get("/getAllMessageChild", auth,messageCtrl.getAllChildMessage);

router.delete("/deleteMessage", auth, messageCtrl.deleteMessage);
module.exports = router;