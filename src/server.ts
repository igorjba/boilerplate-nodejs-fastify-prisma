import { app } from './app'
import { env } from './env'

app.get('/', async (request, reply) => {
  return { message: 'Hello, World!' };
});

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server running port ${env.PORT}`)
  })
