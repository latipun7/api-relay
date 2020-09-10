import axios from 'axios';
import app from 'src/app';
import { getUrl } from 'test/jest.setup';

describe("'football' service", () => {
  it('registered the service', () => {
    const eplStandings = app.service('football/epl-standings');
    const teamMatches = app.service('football/teams/:id/matches');
    const teamDetail = app.service('football/teams/:id');

    expect(eplStandings && teamDetail && teamMatches).toBeTruthy();
  });

  describe("Tests 'football' service endpoints", () => {
    it("'GET /football/epl-standings' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(getUrl('football/epl-standings'));

      expect(data.competition.id).toEqual(expect.any(Number));
    });

    it("'GET /football/teams/64/matches' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(getUrl('football/teams/64/matches'));

      expect(data.count).toEqual(expect.any(Number));
    });

    it("'GET /football/teams/64' properly", async () => {
      expect.assertions(1);

      const { data } = await axios.get(getUrl('football/teams/64'));

      expect(data.id).toEqual(expect.any(Number));
    });
  });

  describe('Error response', () => {
    it('throws a bad request error', async () => {
      expect.assertions(1);

      try {
        await axios.get(getUrl('football/teams/0'));
      } catch ({ response }) {
        expect(response.data.name).toBe('BadRequest');
      }
    });
  });
});
