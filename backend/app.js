
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const db = require('./db');
const expressSession = require('express-session');
const passport = require('passport');


app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"hey hey hey",
}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('',userRoutes);
app.use('',postRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});