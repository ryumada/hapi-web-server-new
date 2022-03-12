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
      return `Page cannot be accessed by ${} method`;
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
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Page not found!';
    }
  },
];

module.exports = routes;
