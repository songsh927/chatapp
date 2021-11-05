import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

const app = express();

app.get('/', function(req, res){
		res.sendFile('##');
		});

const server = app.listen(3000);
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


