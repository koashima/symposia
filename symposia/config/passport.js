const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Contributor = require('../models/contributor');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      Contributor.findOne({ googleId: profile.id }, (err, contributor) => {
        if (err) return cb(err);
        if (contributor) {
          return cb(null, contributor);
        } else {
          // we have a new student via OAuth!
          var newContributor = new Contributor({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newContributor.save((err) => {
            if (err) return cb(err);
            return cb(null, newContributor);
          });
        }
      });
    }
  )
);

passport.serializeUser((contributor, done) => {
  done(null, contributor.id);
});

passport.deserializeUser((id, done) => {
  Contributor.findById(id, (err, contributor) => {
    done(err, student);
  });
});
