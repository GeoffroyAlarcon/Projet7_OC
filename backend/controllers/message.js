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
    if (err) throw err;
    rows.forEach((row) => {
      console.log(row)
      const user = new User(`${row.utilisateurId}`, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
      const message = new Message(`${row.messageId}`, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null)

      tab.push(message)

    })
    return res.status(200).json({
      tab

    });

  })
}


exports.getOneMessage = (req, res, next) => {
  const messageModel = new Message()
  conn.query(messageModel.getOneMessageById(), [req.query._id], function (err, rows, result) {
    if (err) throw err;
    console.log(rows)
    rows.forEach((row) => {
  
      const user = new User(`${row.utilisateurId}`, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
      const messageById = new Message(`${row.messageId}`, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null)
      return res.status(200).json({
        messageById

      });


    })
  })
}



exports.deleteMessage = (req, res, next) => {
  const messageModel = new Message();
  const data = req.body;
  console.log(data);
  conn.query(messageModel.deleteMessage(), req.body, function (err, result) {
    if (err) throw err;
    if (err) {
      return res.status(401).json({ message: '' });
    }
    else {
      return res.status(201).json({
        message: "suprresion avec succès"
      })
    }

  })

}


