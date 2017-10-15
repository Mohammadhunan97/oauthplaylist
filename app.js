const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
c = console.log;

app.set('view engine','ejs');
app.use(express.static('public'));

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

