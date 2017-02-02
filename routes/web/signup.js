var express = require('express');
var router = express.Router();
var User = require('../../models/user');


module.exports = {
  get : function (req, res) {

    res.render('signup', { title: 'Welcome to Registration Page'});
  },

 post : function(req, res){
     var data =req.body;
     console.log(data);

     var current = new User(data);
     console.log(current);


     current.save(function(err,result){
    //   console.log(err);
           if(err){
                return res.json({
                              error : true,
                              reason : err,
                               });
           }else{
                return res.json({
                                value : result,
                              error : false,
                              });
                }
        });
   }



}
