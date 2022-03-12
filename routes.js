const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    }
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return `Page cannot be accessed by ${request.method} method`;
    }
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About Page';
    }
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return `Page cannot be accessed by ${request.method} method`;
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}', // optional path parameter
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if(lang === 'id') {
        return `Hai ${name}`;
      }

      return `Hello ${name} !`;
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h)  => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Page not found!';
    }
  },
];

module.exports = routes;
