const homeRoutes = require('./home');
const profileRoutes = require('./profile');
const signinRoutes = require('./signin');
//const postsRoutes = require('./posts');
//const flavorsRoutes = require('./flavors');

const constructorMethod = (app) => {
  app.use('/', homeRoutes)
  app.use('/profile', profileRoutes);
  app.use('/signin', signinRoutes);
  //app.use('/posts', postsRoutes);
  //app.use('/flavors', flavorsRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;