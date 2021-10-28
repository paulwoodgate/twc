import eventRoutes from './routes/event-routes';
import reportRoutes from './routes/report-routes';
import messageRoutes from './routes/message-routes';
import path from 'path';

exports.registerRoutes = (app) => {
  app.use('/api/events', eventRoutes);
  app.use('/api/reports', reportRoutes);
  app.use('/api/messages', messageRoutes);
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
};
