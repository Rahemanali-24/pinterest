
const express = require('express');
const router =  express.Router();
const userModel = require('../models/users-model')
const passport = require('passport');




//user details
// router.get('/createUser',async(req,res,next)=>{
//     try{
//         const createdUser = await userModel.create({
//             username: "don",
//             password: "akss",
//             posts: [],
//             email:"akss",
//             fullName: "aksss",
//          })
//          console.log(createdUser);
//          res.send(createdUser);
//     }catch(err){
//         res.status(500).send(err);
//         console.log(err);
//     }
//  })





router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/profile");
    } else {
        next(); 
    }
});

router.get('/', function(req, res, next) {
    res.send("hii");
});

router.get('/profile',isLoggedIn,function(req,res,next){
    res.send("Profile");
});



// router.post("/register",function(req,res,next){
//     const {email,username,fullName} = req.body; 
//     const userData = new userModel({email,username,fullName});

//     userModel.register(userData,req.body.password).then(function(){
//        passport.authenticate("local",req,res,function(){
//         res.redirect("/profile");
//        })
//     });
// })


router.post("/register", function(req, res, next) {
    const { email, username, fullName } = req.body;
    const userData = new userModel({ email, username, fullName });

    userModel.register(userData, req.body.password, function(err, user) {
        if (err) {
            console.error(err);
            console.log("backend register errrorrrrrr");
            return res.status(500).send(err);
        }
        passport.authenticate("local")(req, res, function() {

            res.json({ message: "Registration successful", user });
             });
    });
});



router.post("/login",passport.authenticate("local",{
    successRedirect:"/profile",
    failureRedirect:"/",
}),function(req,res,next){
   
})


router.get("/logout",function(req,res){
    req.logout(function(err){
        if(err) {return next(err);}
        res.redirect('/');
    });
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}


 module.exports = router;