const LocalStrategy =  require('passport-local').Strategy;
const User = require('../models/users-model')
const userRoutes = require('../routes/users'); 
module.exports = function(passport){
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser((user, done) => {
        userRoutes.serializeUser();
    });
    passport.deserializeUser((user, done) => {
        userRoutes.deserializeUser();
    });
    
}