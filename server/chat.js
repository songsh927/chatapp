import express from 'express';
import {Server} from 'socket.io';

const router = express.Router();
const app = express();
const __dirname = '#';

router.get('/chatting', (req, res) => {
		res.sendFile(__dirname + '/html/chatIndex.html');
		});

export function initSocket(server){
const io = new Server(server);

io.on('connection', (socket) => {
	console.log('user connected');

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
	
	socket.on('disconnect', () => {
	console.log('user disconnected');
	});
	});
}
export default router;
