
const express = require('express');
const app = express();
const cors = require('cors'); 
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const db = require('./db');
const expressSession = require('express-session');
const passport = require('passport');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"hey hey hey",
}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
const corsOptions = {
    origin: 'http://localhost:4200', 
    optionsSuccessStatus: 200 
};
app.use(cors());
app.use('/',userRoutes);
app.use('',postRoutes);
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});