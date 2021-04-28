import express, { Request, Response } from 'express';
import response from '../services/response';
import validateUserPost from '../config/db/models';
import winston from 'winston';
const router = express.Router();

// Create a new user
router.post('/create', async (req: Request, res: Response) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: complete user registration logic
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: complete user login logic
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// user change password
router.post('/password/change', async (req: Request, res: Response) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: complete password change logic
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Password forgot
router.post('/password/forgot', async (req: Request, res: Response) => {
  // validate req body
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: forgot password
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

export default router;
