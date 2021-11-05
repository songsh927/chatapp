import express from 'express';
import chatRouter from './chat.js';
import loginRouter from './router/route.js';
import {initSocket} from './chat.js';


const __dirname = '#';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/login', loginRouter);

app.get('/' , (req,res) => {
    res.status(200).sendFile(__dirname + '/html/index.html');
});

app.get('/num2' , (req,res) => {
    res.status(200).sendFile(__dirname + '/html/num2.html');
});


app.get('/chatting',chatRouter);

const server = app.listen(3000);
initSocket(server);
