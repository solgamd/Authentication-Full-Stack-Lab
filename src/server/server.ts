import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as passport from 'passport';
import './middleware/localstrategy';
import './middleware/bearerstrategy';
// import { HashPassword } from './utils/security/password';
import routes from './routes';

const app = express();

app.use(passport.initialize());
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.json());
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));



// console.log(HashPassword('otterdude7'));  //Used to generate hashed/salted passwords for tokens in MySQL database