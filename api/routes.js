import eventRoutes from './src/routes/event-routes';
import reportRoutes from './src/routes/report-routes';

export function registerRoutes(app) {
  app.use('/api/events', eventRoutes);
  app.use('/api/reports', reportRoutes);
}
