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
    method: 'POST',
    path: '/indexes/{index?}',
    handler: (request, h) => {
      const data = ['A', 'B'];
      const { index } = request.params;

      const selectedIndex = data.find((value) => (value === index ? value : null));

      console.log(selectedIndex);

      if (selectedIndex) {
        return `Index ${selectedIndex}!`;
      }

      const response = h.response(JSON.stringify({
        message: 'Wrong Index?!'
      }))
        .code(400)
        .type('application/json');
        
      return response;
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
