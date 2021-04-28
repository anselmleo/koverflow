import express from 'express';
import response from '../services/response';
import validateUserPost from '../config/db/models';
const router = express.Router();

// Create a new user
router.post('/create', async (req, res) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  // TODO: complete user registration logic

  return response.error(res);
});

// Login user
router.post('/login', async (req, res) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  // TODO: complete user registration logic

  return response.error(res);
});

export default router;
