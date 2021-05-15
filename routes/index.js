const homeRoutes = require('./home');
//const profileRoutes = require('./profile');
//const postsRoutes = require('./posts');
//const loginRoutes = require('./login');
//const flavorsRoutes = require('./flavors');

const constructorMethod = (app) => {
  app.use('/', homeRoutes)
  //app.use('/profile', profileRoutes);
  //app.use('/posts', postsRoutes);
  //app.use('/login', loginRoutes);
  //app.use('/flavors', flavorsRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;