const Message = require("../models/message")
const jwt = require("jsonwebtoken");
const conn = require('../mysqlConfig');
const User = require("../models/user");

exports.newMessage = (req, res, next) => {
  const messageModel = new Message()
  const user = new User();
  const message = req.body;
  console.log(message);
  conn.query(messageModel.saveMessage(), [message._titre, message._contenu, message._user._id], function (err, result) {
    if (err) throw err;
    if (err) {
      return res.status(401).json({ message: '' });
    }
    else {
      return res.status(200).json({
        message
      })
    }

  })
}
exports.getAllMessage = (req, res, next) => {
  let tab = []
  const messageModel = new Message()
  conn.query(messageModel.getAll(), function (err, rows, result) {
    rows.forEach((row) => {
      tab.push(row)

    })
    return res.status(200).json({
tab

    });
  
  })
}


