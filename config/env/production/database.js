// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'user'),
//         password: env('DATABASE_PASSWORD', '1234  '),
//         schema: env('DATABASE_SCHEMA', 'public'), // Not required
//         ssl: {
//             ca: env('DATABASE_SSL_CA')
//         },
//       },
//       debug: false,
//     },
//   });


// railway-config
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5931),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});
