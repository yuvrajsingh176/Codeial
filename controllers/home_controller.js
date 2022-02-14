const Post=require('../models/post');
module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
// Post.find({},function(err,posts){
//     if(err){
//         console.log("Error in finding post",err);
// return;
//     }
//     return res.render('home', {
//         title: "Codeial | Home",
//         posts:posts
//     });
// });
Post.find({})
.populate('user')
.populate({
    path:'comments',
    populate:{
        path:'user'
    }
})
.exec(function(err,posts){

    if(err){
        console.log("Error in finding error",err);
return;
    }
    return res.render('home', {
        title: "Codeial | Home",
        posts:posts
    });
})
   
}

// module.exports.actionName = function(req, res){}