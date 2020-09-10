import axios from 'axios';
import app from 'src/app';
import { getUrl } from 'test/jest.setup';

describe("'news' service", () => {
  it('registered the service', () => {
    const topHeadlines = app.service('news/top-headlines');
    const everything = app.service('news/everything');

    expect(topHeadlines && everything).toBeTruthy();
  });

  describe("Tests 'news' service endpoints", () => {
    it("'GET /news/top-headlines' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(
        getUrl('news/top-headlines', 'country=jp')
      );

      expect(data.status).toBe('ok');
    });

    it("'GET /news/everything' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(getUrl('news/everything', 'q=messi'));

      expect(data.status).toBe('ok');
    });
  });

  describe('Error response', () => {
    it('throws a bad request error', async () => {
      expect.assertions(1);

      try {
        await axios.get(getUrl('news/everything'));
      } catch ({ response }) {
        expect(response.data.name).toBe('BadRequest');
      }
    });
  });
});
