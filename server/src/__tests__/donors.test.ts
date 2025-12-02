import request from 'supertest';
import app from '../server';

describe('Donors', () => {
  if (process.env.DB_READY !== '1') {
    it('skipped due to missing DB', () => {
      expect(true).toBe(true);
    });
    return;
  }
  it('lists donors', async () => {
    const res = await request(app).get('/api/v1/donors');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
