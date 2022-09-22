const { User } = require("../models");
const bcrypt = require("bcrypt");

const me = async (req, res) => {
 try {
  const user = await req.user 

  if (!user) {
    return res.sendStatus(401);
  }
  res.json({usuario : user})
   
 } catch (error) {
  res.sendStatus(500)
 }
};

const register = async (req, res) => {
  // lo ideal es utilizar express validator para checkear el email
  try {
   const newUser = await User.create(req.body)
   if(!newUser) res.status(401).send("Desautorizado")

   res.status(201).send(newUser)
    
  } catch (error) {
    res.sendStatus(500)
  }

  
};

const  logIn = (req, res) => {
  try {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (!user) {
        res.status(401).json({ msg: "email not found in database" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          
          res.status(200).json({
         
            user: user,
          });
        } else {
          res.status(401).json({ msg: "Incorrect password" });
        }
      }
    });
  } catch (error) {
    res.status(404).json(error);
  }
}


const logOut = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

module.exports = { me, register, logIn, logOut };
