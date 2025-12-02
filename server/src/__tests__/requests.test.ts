import request from 'supertest';
import app from '../server';

describe('Requests', () => {
  if (process.env.DB_READY !== '1') {
    it('skipped due to missing DB', () => {
      expect(true).toBe(true);
    });
    return;
  }
  it('creates a blood request', async () => {
    const res = await request(app).post('/api/v1/requests').send({
      patientName: 'Alice',
      bloodType: 'A+',
      age: 30,
      diseaseName: 'Anemia',
      location: 'City Hospital',
      contactNumber: '555-1234',
    });
    expect(res.status).toBe(201);
    expect(res.body.data.id).toBeDefined();
  });

  it('lists blood requests', async () => {
    const res = await request(app).get('/api/v1/requests');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
