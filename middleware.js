module.exports = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) {
    console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
    next();
  }
}


// Another way to do it
// var middleware = {
//   requireAuthentication: function (req, res, next) {
//     console.log('private route hit!');
//     next();
//   },
//   logger: function (req, res, next) {
//     console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
//     next();
//   }
// }
// module.exports = middleware;
