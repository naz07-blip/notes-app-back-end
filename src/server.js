<<<<<<< HEAD
const Hapi = require('@hapi/hapi');
const routes = require('./routes'); 

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });


  server.route(routes);

  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};


process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
=======
const Hapi = require('@hapi/hapi');
const routes = require('./routes'); 

const init = async () => {
  const server = Hapi.server({    
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});


  server.route(routes);

  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};


process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
>>>>>>> d6de1d6cf205d314cd3a74216e789e146ae003da
