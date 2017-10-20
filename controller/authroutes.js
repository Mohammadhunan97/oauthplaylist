/* 
	all routes for authentication 
	/auth/<routename>
*/ 

const router = require('express').Router(),
passport = require('passport'),
passport_setup = require('./passport-setup');


router.get('/google', passport.authenticate('google',{
	scope: ['profile']
}));
	// res.send('logging in with google');



// when you've logged in and redirected back to local server, reauthenticate with the given url code params and calls the callback function in ./passport-setup
router.get('/google/redirect',passport.authenticate('google'),(req,res)=> res.send('logged in with google'))



router.get('/local',(req,res)=>{
	res.send('logging in locally');
})
router.get('/logout',(req,res)=>{
	res.send('logging out');
})


module.exports = router;