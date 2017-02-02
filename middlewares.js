module.exports = {
    saurabh :function(req, res, next){
      console.log("In MIDDLEWARE");
      // var sessiondata = {
      //   n : req.session.name,
      //   e : req.session.email,
      //   t : req.session.loginTime
      // }
      console.log(req.session.email);
         if( req.session.email==undefined)
          {
            console.log("Signed Out");
            //res.send("session EXp");
            //res.render('login',{ title : "Session Expired"});
            res.redirect('login');
            new PNotify({
                  title: 'See you soon..',
                   text: 'Logged out',
                   type: 'info',
                   icon: 'fa fa-user-circle'
            });
          }
        next();
    }
};
