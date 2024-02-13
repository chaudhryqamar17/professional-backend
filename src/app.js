import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

/* These app.use are used for something called middlewares and are basically configurations
1. CORS is Cross Origin Resource Sharing which helps in the issue of accessing the server port from the frontend port 
2. Cookie parser helps us in performing CRUD operations for the users' browser cookies
3. urlencoded configures how url data is encoded space character can be encoded as %20 or +
4. .json tells that the json is accepted, 5. statis files can be attached */
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.json({limit: "16kb"}));
app.use(express.static("public"));


export default app;