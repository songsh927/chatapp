import express, { application } from 'express'
import 'express-async-errors'

const router = express.Router();
const __dirname = '#';
const app = express();

const users = [
    {
        userid : '1' ,
        username : 'asdf',
        password : 'asdf'
    }
]
router.get('/', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/html/login.html');
});

router.post('/' , (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password
    const data = users.find((users) => users.username === username);
    if(password){
        if(data.password === password){
            res.status(200).sendFile(__dirname + '/html/num3.html');
        }
        else{
            res.sendStatus(404);
        }
    }else{
        res.status(400).sendFile(__dirname + '/html/num3.html');
    }

    
    res.status(200).sendFile(__dirname + '/html/num3.html');

})

export default router;
