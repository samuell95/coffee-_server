import fastify from 'fastify'
import { env } from './env'

const app = fastify()

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT ? Number(env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP server runing on http://localhost:3333🛜')
  })
