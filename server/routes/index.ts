import express from 'express';
import refillRoute from './refills';
import transferRoute from './transfer';
import vaccineRoute from './vaccine';

export const registerRoutes = async (app: express.Application) => {
  app.use(refillRoute);
  app.use(transferRoute);
  app.use(vaccineRoute);
};
