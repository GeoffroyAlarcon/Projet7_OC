const Message = require("../models/message")
const conn = require('../mysqlConfig');
const User = require("../models/user");
const userCtrl = require("./user")

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
      const user = new User(`${row.utilisateurId}`, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
      const message = new Message(`${row.messageId}`, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null)

      messages.push(message)

    })
    return res.status(200).json({
      messages

    });

  })
}




exports.getAllChildMessage = (req, res, next) => {
  let messages = []
  const messageModel = new Message()

  conn.query(messageModel.getAllChildMessage(), function (err, rows, result) {
    if (err) throw err;
    rows.forEach((row) => {
      const user = new User(`${row.utilisateurId}`, `${row.prenom}`, `${row.nom}`, null, null, `${row.pseudo}`, `${row.departement}`)
      const message = new Message(`${row.messageId}`, user, `${row.titre}`, `${row.contenu}`, `${row.postDate}`, null)

      messages.push(message)

    })
    return res.status(200).json({
      messages

    });

  })
}

exports.getOneMessage = (req, res, next) => {
  const messageModel = new Message()
  conn.query(messageModel.getOneMessageById(), req.query._id, function (err, result) {
    if (err) throw err
    console.log(result[0]);

    const user = new User(`${result[0].idUtilisateur}`, `${result[0].prenom}`, `${result[0].nom}`, null, null, `${result[0].pseudo}`, `${result[0].departement}`);
    const messageById = new Message(result[0].messageId, user, result[0].titre, result[0].contenu, result[0].postDate, null)
    return res.status(200).json({
      messageById

    });


  })
}



exports.deleteMessage = (req, res, next) => {
  const messageModel = new Message();
  const data = req.query;
  console.log(data);
  const token = req.body
  conn.query(messageModel.deleteMessage(), req.query._id, function (err, result) {
    if (err) throw err;
    if (err) {
      return res.status(401).json({ message: '' });
    }
    else {
      return res.status(200).json({
        message: "suprresion avec succès"
      })
    }

  })

}


