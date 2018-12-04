// Custom middleware:
// module.exports.gatekeeper = (req, res, next) => {
//   const pass = req.query.pass;
//   if ( pass === 'supersecret' ){
//     // Allow passthrough:
//     next();
//   } else {
//     res.status(400).json({ message: 'invalid password'});
//   }
// };

/* OR: */
const gatekeeper = (req, res, next) => {
  const pass = req.query.pass;
  if ( pass === 'supersecret' ){
    // Allow passthrough:
    next();
  } else {
    res.status(400).json({ message: 'invalid password'});
  }
};
module.exports = {
  gatekeeper: gatekeeper
}

