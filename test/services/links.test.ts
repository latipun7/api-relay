import axios from 'axios';
import app from 'src/app';
import { getUrl } from 'test/jest.setup';

describe("'links' service", () => {
  it('registered the service', () => {
    const service = app.service('links');

    expect(service).toBeTruthy();
  });

  describe("Tests 'links' service endpoints", () => {
    it("'GET /links' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(getUrl('links'));

      expect(data.data).toEqual(expect.any(Array));
    });

    it("'POST /links' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.post(getUrl('links'), {
        slug: 'test1',
        fullURL: 'https://test.dev',
      });

      expect(data.slug).toBe('test1');
    });

    it("'POST /links' without slug properly", async () => {
      expect.assertions(1);

      const { data } = await axios.post(getUrl('links'), {
        fullURL: 'https://test2.dev',
      });

      expect(data.fullURL).toBe('https://test2.dev');
    });
  });

  describe('Error response', () => {
    it('throws a not found error', async () => {
      expect.assertions(1);

      try {
        await axios.get(getUrl('links/xxx'));
      } catch ({ response }) {
        expect(response.data.name).toBe('NotFound');
      }
    });

    it('throws a validation error', async () => {
      expect.assertions(1);

      try {
        await axios.post(getUrl('links'), {
          slug: 'te',
          fullURL: 'notURL',
        });
      } catch ({ response }) {
        expect(response.data.name).toBe('BadRequest');
      }
    });
  });
});
