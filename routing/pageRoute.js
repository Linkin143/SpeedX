 exports.index = function(req, res) {
  const user = res.locals.user;
  res.render('index', { user });
};
  exports.signup = function(req, res) {
    res.render('signin');
  };
  
  exports.about =  function(req, res) {
    const user = res.locals.user;
    res.render('AboutUs', { user });
  };
  
  
  exports.help =  function(req, res) {
    const user = res.locals.user;
    res.render('Help', { user });
  };
  
  exports.myprofile = function(req, res) {
    const user = res.locals.user;
    res.render('MyProfile', { user });
  };

  exports.myorder = function(req, res) {
    const user = res.locals.user;
    res.render('myorder', { user });
  };
  
  exports.service = function(req, res) {
    const user = res.locals.user;
    res.render('service', { user });
  };

