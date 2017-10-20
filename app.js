const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
authroutes = require('./controller/authroutes'),
userroutes = require('./controller/userroutes'),
c = console.log,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/oauthplaylist');

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}))

app.use('/auth',authroutes);
app.use('/user',userroutes);





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

