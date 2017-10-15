/* 
	all routes for authentication 
	/auth/<routename>
*/ 

const router = require('express').Router();

router.get('/google',(req,res)=>{
	// passport.authenticate google
	res.send('logging in with google');
})

router.get('/local',(req,res)=>{
	res.send('logging in locally');
})
router.get('/logout',(req,res)=>{
	res.send('logging out');
})


module.exports = router;