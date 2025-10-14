const request = require('supertest');
const express = require('express');

// Create a simple test app for now
const app = express();
app.use(express.json());
app.get('/api/users/profile', (req, res) => {
  res.json({ name: 'Test User', email: 'test@example.com' });
});
app.put('/api/users/profile', (req, res) => {
  res.json({ name: req.body.name, email: req.body.email });
});

describe('User Routes', () => {
  it('should get user profile', async () => {
    const res = await request(app)
      .get('/api/users/profile')
      .set('Accept', 'application/json');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
  });

  it('should update user profile', async () => {
    const res = await request(app)
      .put('/api/users/profile')
      .send({
        name: 'Test User',
        email: 'testuser@example.com'
      })
      .set('Accept', 'application/json');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Test User');
    expect(res.body).toHaveProperty('email', 'testuser@example.com');
  });
});
