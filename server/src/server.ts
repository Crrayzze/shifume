import "reflect-metadata";
import app from "./index";
import socketServer from "./socket";
import { Request, Response} from 'express';
import * as http from 'http';


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

var server = http.createServer(app);

server.listen(8000, () => {
  console.log('Server running on port 8000');
});

const io = socketServer(server);
