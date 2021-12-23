// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Factory, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
};

const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
};

export default makeServer;
