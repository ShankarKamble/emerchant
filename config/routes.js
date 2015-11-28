module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('../app/controllers/users'),
    mobile = require('../app/controllers/mobile');

    app.get('/signin', users.signin);
    app.get('/signout', users.signout);
    app.get('/me', users.me);

    //Setting up the users api
    app.post('/users', users.create);

    //Setting up the users api
    app.post('/users/update', users.updateUser);


    //Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), users.session);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //User Routes


    //Contact Routes

   // get  Mobiles
    app.get('/Mobiles',mobile.getMobiles); 

    app.post('/buyProducts' ,mobile.buyProducts); 


    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
