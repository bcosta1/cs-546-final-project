const homeRoutes = require('./home');
const profileRoutes = require('./profile');
const signinRoutes = require('./signin');
const flavorsRoutes = require('./flavors');
//const postsRoutes = require('./posts');

const constructorMethod = (app) => {
  app.use('/', homeRoutes)
  app.use('/profile', profileRoutes);
  app.use('/signin', signinRoutes);
  app.use('/flavors', flavorsRoutes);
  //app.use('/posts', postsRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;