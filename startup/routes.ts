import express from 'express';
// import config from 'config';
// import appVersions from '../routes/appVersions';
import reqLogger from '../startup/logger';
import error from '../middleware/error';

export default (app: express.Application) => {
  app.use(express.json());
  app.use(reqLogger);
  // app.use('api/version', appVersion);
  app.use(error);
  app.get('/', (_req, res) => {
    res.json({ status: true, message: 'Welcome to Koverflow API 👨‍🎤' });
  });
};
