import express from 'express';
import bodyParser from "body-parser";
import {router} from "./routes";
import {errorHandler} from "./utils/error-handler";
import {errorMorgan, infoMorgan} from "./utils/morgan-middleware";

const app = express();

app.use(errorMorgan);
app.use(infoMorgan);

app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(8080, () => {
    console.log('Server started at port 8080');
});