const fastify = require('fastify')({ logger: true });
const fs = require('fs/promises');

const hostname = '127.0.0.1';
const port = 3000;

// Cache the index.html content
let indexHtmlCache;

// Read index.html into memory on startup
const loadIndexHtml = async () => {
  try {
    indexHtmlCache = await fs.readFile('index.html');
  } catch (err) {
    console.error('Failed to load index.html:', err);
    process.exit(1);
  }
};

// Route handler
fastify.get('/', async (request, reply) => {
  return reply
    .type('text/html')
    .send(indexHtmlCache);
});

// Start server
const start = async () => {
  try {
    await loadIndexHtml();
    await fastify.listen({ port, host: hostname });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
