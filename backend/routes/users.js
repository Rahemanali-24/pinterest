
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
        // res.redirect("/profile");
    } else {
        next(); 
    }
});

router.get('/', function(req, res, next) {
    res.json({ message: "hii" });


});

router.get('/profile',isLoggedIn,function(req,res,next){
    
    res.send("Profile");
});



router.get('/feed',function(req,res,next){
    res.send('Hi feed');
})



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



router.post("/login", function(req, res, next) {
    passport.authenticate("local", { failureFlash: true }, function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: "Authentication failed", flash: req.flash('error') });
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.json({ message: "Login successful", user: req.user, flash: req.flash('success') });
        });
    })(req, res, next);
});


router.get("/logout",function(req,res){
    req.logout(function(err){
        if(err) {return next(err);}
        // res.redirect('/');
    });
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
    res.json({ message: "Auth successful in Login", user: req.user });
}
module.exports = router;
