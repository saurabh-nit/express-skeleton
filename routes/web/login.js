var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var moment = require('moment');


module.exports = {
  get : function (req, res) {
          res.render('login',{ title : 'Login Page'});
  },

  post : function(req,res){
       var cred = req.body;
    console.log(cred.email);
    // console.log(cred.password);

  User.findOne({ email : cred.email }).exec(function(err, data){
       if(err){

       }
       else{
            console.log(data);
            if(data == null || data=="") {
                console.log('E-mail not found');
                return res.json({error: true, data:'E-mail not found.'});
             }


              data.comparePassword(cred.password, function(err, isMatch){
                  if(isMatch && !err){
                     console.log("successful");
                     req.session.name = data.name.full;
                     req.session.email = data.email;
                     req.session.loginTime = moment().format('LLL');

                     // console.log(req.session.name);
                     //console.log(req.session.email);
                     //console.log(req.session.loginTime);

                      var d = {
                           n : req.session.name,
                           e : req.session.email,
                           t : req.session.loginTime
                      }

                     res.json({
                          error : false,
                          result: d
                     });

                  }
                 else{
                   return res.json({error:true, data:'Incorrect Password.'});
                 }

             });


      }
   });
 }
}
