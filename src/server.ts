import * as Http from 'http';
import * as express from 'express';

const app = express();

app.set('port', (process.env.PORT || 3000))
app.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(`answering... ${req.url}`);
  res.send({ code: 0, message: 'Success', time: new Date().getTime() });
});

export function start() {
  const server = new Http.Server(app);
  server.listen(app.get('port'));
  server.on('listening', () => {
    console.log(`listening on port ${app.get('port')}...`);
  });
}