module.exports = [
  'strapi::errors',
  'strapi::security',
  {
  name: 'strapi::cors',
  config: {
    enabled: true,
    headers: '*', // o puedes especificar los headers permitidos
    origin: ['https://backend-aimas.onrender.com', 'https://www.aimasstudio.com'], // reemplaza con tus dominios
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'], // o puedes especificar los métodos permitidos
    keepHeaderOnError: true,
  }
},
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
