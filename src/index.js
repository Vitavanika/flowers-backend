import { setupServer } from './server.js';
import { initMongoConnection } from './db/connection.js';

export const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
