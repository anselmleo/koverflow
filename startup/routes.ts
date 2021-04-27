import express from 'express';
// import config from 'config';
// import appVersions from '../routes/appVersions';
import reqLogger from '../startup/logger';
import error from '../middleware/error';
import users from '../routes/users';

export default (app: express.Application) => {
  app.use(express.json());
  app.use(reqLogger);
  // app.use('api/version', appVersion);
  app.use(error);
  app.use('/api/users', users);
  app.get('/', (_req, res) => {
    res.json({ status: true, message: 'Welcome to Koverflow API 👨‍🎤' });
  });
};
