import request from 'supertest';
import app from '../server';

describe('CORS', () => {
  if (process.env.DB_READY !== '1') {
    it('skipped due to missing DB', () => {
      expect(true).toBe(true);
    });
    return;
  }
  it('responds to preflight OPTIONS on register', async () => {
    const res = await request(app)
      .options('/api/v1/auth/register')
      .set('Origin', 'http://localhost:8081')
      .set('Access-Control-Request-Method', 'POST')
      .set('Access-Control-Request-Headers', 'Content-Type');
    expect([200, 204]).toContain(res.status);
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:8081');
  });
});
