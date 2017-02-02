var express = require('express');
var router = express.Router();
//var User = require('../../models/user');
var moment = require('moment');

// var checkNaN = function(req,res,next){
//                     // if(chk==null){
//                     //   next();
//                     // }
//                     // else{
//                     //   return res.render('login');
//                     }
//                     console.log("IN MIDDLEWARE");
// }
  //router.all("*",checkNaN);

module.exports = {

    get : function (req,  res) {
           //res.render('afterlogin',{ title : req.session.name });   //THIS ONLY PASS THE USER NAME
           //if(sessiondata){
          // console.log(sessiondata);

             var sessiondata = {
               n : req.session.name,
               e : req.session.email,
               t : req.session.loginTime
             }
            // chk=sessiondata;
              res.render('afterlogin',{ data : sessiondata });
          // }
        //  else {
        //    res.render('login');
        //  }
       },


    out : function (req, res) {
              req.session.destroy();
              res.send();
              //res.redirect('/login');
              //res.render('login');
          }
};
