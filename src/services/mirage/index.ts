// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
};

const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

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

      this.get('/users', function (schema, req) {
        // eslint-disable-next-line camelcase
        const { page = 1, per_page = 10 } = req.queryParams;
        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd,
        );

        console.log(users);
        return new Response(200, { 'x-total-count': String(total) }, { users });
      });
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
};

export default makeServer;
