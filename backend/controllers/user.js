const User = require("../models/user.js")

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
      const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
      console.log("Jane's auto-generated ID:", jane.id);
    })
    .catch(error => res.status(500).json({ error }));
};