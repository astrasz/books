import express, { Router } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import sequelize from './models/sequelize';
import { router } from './routes/router';
import { BooksController } from './controllers/books.controller';

const booksController = new BooksController()

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

sequelize.sync()
    .then(() => {
        console.log('Database has been connected')
        app.listen(PORT, () => console.log(`App run on port ${PORT}`));
        router(app, booksController);
    }
    );

