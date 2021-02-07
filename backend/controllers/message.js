const Message = require("../models/message")
const conn = require('../mysqlConfig');
const User = require("../models/user");
const bcrypt = require('bcrypt')

exports.newMessage = (req, res, next) => {
  const messageModel = new Message()
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
exports.answerMessage = (req, res, next) => {
  console.log("hello world !")
  const messageModel = new Message()
  const message = req.body;
  console.log(message);
  conn.query(messageModel.answerMessage(), [message._messageParent.titre, message._messageParent.id, message._contenu, message._user.id], function (err, result) {
    if (err) throw err;
    if (err) {
      return res.status(401).json({ message: 'réponse bien enregistré ' });
    }
    else {
      return res.status(200).json({
        message
      })
    }

  })
}



exports.getAllMessage = (req, res, next) => {
  let messages = []
  const messageModel = new Message()

  conn.query(messageModel.getAll(), function (err, rows, result) {
    if (err) throw err;
    rows.forEach((row) => {
      if (row.messageParent == null) {
        const user = new User(`${row.utilisateurId}`, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
        const message = new Message(`${row.messageId}`, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null)

        messages.push(message)
      }
    })
    return res.status(200).json({
      messages

    });

  })
}




exports.getAllChildMessage = (req, res, next) => {
  let messages = []

  const messageModel = new Message()

  conn.query(messageModel.getallChildMessage(), req.query._id, function (err, rows, result) {
    if (err) throw err;
    rows.forEach((row) => {
      const user = new User(row.utilisateurId, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
      const message = new Message(row.messageId, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null, null)

      messages.push(message)

    })
    return res.status(200).json({
      messages

    });

  })
}

exports.getOneMessage = (req, res, next) => {
  const messageModel = new Message()
  conn.query(messageModel.getOneMessageById(), req.query._id, function (err, rows) {
    rows.forEach((row) => {
      const user = new User(row.idUtilisateur, row.prenom, row.nom, null, null, row.pseudo, row.departement);
      const messageById = new Message(row.messageId, user, row.titre, row.contenu, row.postDate, null)
      return res.status(200).json({
        messageById
      });
    })

  })
}



exports.deleteMessage = (req, res, next) => {
  var succesDelete = false;
  const messageModel = new Message();
  const userModel = new User();
  var sha1 = require('sha1');
  console.log(req.query);

  conn.query(userModel.findUser(), req.query._email, (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
      // on vérifie si l'utilisateur a le statut d'admninistrateur ou pas
      if (row.administrateur == 1 && row.motDePasse == req.query._motDePasse) {
        conn.query(messageModel.deleteMessageForAdmin(), req.query._id, function (err,result) {
          if (err) throw err;
          if (result.affectedRows == 0) {
            return res.status(401).json({ error: ' suppression non authorisé' });
          }
          else {

            return res.status(200).json({
              message: "suprresion avec succès"
            })
          }

        })

      }

      else {
        conn.query(messageModel.deleteMessage(), [req.query._id, req.query._motDePasse, req.query._email], function (err, result) {

          if (result.affectedRows == 0) {
            return res.status(401).json({ error: ' suppression non authorisé' });
          }
          else {
            return res.status(200).json({
              message: "suprresion avec succès"

            })
          }

        })
      }

    })
  })
}




