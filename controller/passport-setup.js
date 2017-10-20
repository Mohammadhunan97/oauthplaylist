const passport = require('passport'),
GoogleStrategy = require('passport-google-oauth20'),
key = require('../apikey');

passport.use(new GoogleStrategy({
	// options for google strategy
	clientID: key.google.client_ID,
	clientSecret: key.google.client_secret,
	callbackURL: '/auth/google/redirect'
},(accessToken,refreshToken,profile,done)=>{ 
	/*
		accessToken = token received from google if you want to interact with users google profile (read emails, or alter user's profile);
		refreshToken = refreshes the accessToken after it has expired
		profile = the user's profile information returned
		done = a function you call when we are done with the callback;

	*/
	console.log(profile);
	done(null);
	// passport callback function
}))