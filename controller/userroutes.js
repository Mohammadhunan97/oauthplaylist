// http://localhost:3000/user/<Route>
const Router = require('express').Router(),
User = require('../Model/user.model.js');

Router.post('/newgoogle',(req,res)=>{
	let newgoogleuser = new User();
	newgoogleuser.username = req.body.username;
	newgoogleuser.password = req.body.password;

	newgoogleuser.save((err,user)=>{
		if(err){
			res.send(err);
		}else{
			res.send(user);
		}
	})
})

Router.get('/googleindex',(req,res)=>{
	User.find({}).exec((error,users)=>{
		if(!error){
			res.send(JSON.stringify(users))
		}else{
			res.send(error);
		}
	})
})



module.exports = Router;