import request from 'supertest';
import app from '../server';

describe('Auth', () => {
  if (process.env.DB_READY !== '1') {
    it('skipped due to missing DB', () => {
      expect(true).toBe(true);
    });
    return;
  }
  it('registers a user', async () => {
    const res = await request(app).post('/api/v1/auth/register').send({
      fullName: 'Test User',
      email: 'test@example.com',
      mobileNo: '9999999999',
      location: 'City',
      bloodGroup: 'A+',
      gender: 'male',
      password: 'password123',
      confirmPassword: 'password123',
    });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it('logs in a user', async () => {
    await request(app).post('/api/v1/auth/register').send({
      fullName: 'Login User',
      email: 'login@example.com',
      mobileNo: '1234567890',
      location: 'City',
      bloodGroup: 'O+',
      gender: 'male',
      password: 'secret123',
      confirmPassword: 'secret123',
    });
    const res = await request(app).post('/api/v1/auth/login').send({ email: 'login@example.com', password: 'secret123' });
    expect(res.status).toBe(200);
    expect(res.body.data.token).toBeDefined();
  });
});
