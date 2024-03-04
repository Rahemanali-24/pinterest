const express = require("express");
const router = express.Router();
const postModel = require("../models/posts-model");
const userModel = require("../models/users-model"); // Assuming you have a user model defined
const mongoose = require("mongoose");


//post for specific user


// router.get("/createPost", async (req, res, next) => {
//   try {
//     const createdPost = await postModel.create({
//       postText: "HELLO Kaise ho app log",
//       user: "65df27944d1f0c2ad9bcdb39", 
//     });

//     const userId = "65df27944d1f0c2ad9bcdb39"; 
//     const user = await userModel.findById(userId);

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     user.posts.push(createdPost._id);

//     await user.save();

//     res.send("Post created and associated with the user");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });


// router.get('/alluserposts',async(req,res,next)=>{
//     let user = await userModel.findOne({_id:"65df27944d1f0c2ad9bcdb39"}).populate('posts');

//     res.send(user);  
// });





router.get('/feed',function(req,res,next){
    res.send('Hi feed');
})


module.exports = router;
