const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
authroutes = require('./controller/authroutes'),
c = console.log;

app.set('view engine','ejs');
app.use(express.static('public'));

app.use('/auth',authroutes);



app.get('/',(req,res)=>{
	res.render('home');
})

app.listen(port,(err)=>{
	if(!err){
		c('listening on',port);
	}else{
		c('err:\n\n',err);
	}
})

